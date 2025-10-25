'use client'

import { TrendingUp, TrendingDown, Flame } from 'lucide-react'

interface Token {
  symbol: string
  name: string
  price: string
  change24h: number
  volume24h: string
  sentiment: number
}

const mockTokens: Token[] = [
  {
    symbol: 'DEGEN',
    name: 'Degen',
    price: '$0.0234',
    change24h: 15.3,
    volume24h: '$1.2M',
    sentiment: 85,
  },
  {
    symbol: 'HIGHER',
    name: 'Higher',
    price: '$0.0156',
    change24h: -5.2,
    volume24h: '$890K',
    sentiment: 72,
  },
  {
    symbol: 'ENJOY',
    name: 'Enjoy',
    price: '$0.0089',
    change24h: 8.7,
    volume24h: '$650K',
    sentiment: 78,
  },
  {
    symbol: 'MOXIE',
    name: 'Moxie',
    price: '$0.0045',
    change24h: 22.1,
    volume24h: '$1.5M',
    sentiment: 92,
  },
]

export function TrendingTokens({ onTokenSelect }: { onTokenSelect: () => void }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-fg flex items-center space-x-2">
          <Flame className="w-5 h-5 text-warning" />
          <span>Trending Tokens</span>
        </h3>
        <span className="text-sm text-fg/60">Based on Farcaster sentiment</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockTokens.map((token) => (
          <TokenCard key={token.symbol} token={token} onSelect={onTokenSelect} />
        ))}
      </div>
    </div>
  )
}

function TokenCard({ token, onSelect }: { token: Token; onSelect: () => void }) {
  const isPositive = token.change24h > 0

  return (
    <button
      onClick={onSelect}
      className="bg-surface rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all duration-200 text-left group"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-bold text-fg group-hover:text-primary transition-colors">
            {token.symbol}
          </h4>
          <p className="text-sm text-fg/60">{token.name}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-fg">{token.price}</p>
          <div
            className={`flex items-center space-x-1 text-sm font-medium ${
              isPositive ? 'text-success' : 'text-error'
            }`}
          >
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span>{Math.abs(token.change24h)}%</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div>
          <p className="text-fg/60">24h Volume</p>
          <p className="text-fg font-medium">{token.volume24h}</p>
        </div>
        <div className="text-right">
          <p className="text-fg/60">Sentiment</p>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-success to-primary rounded-full"
                style={{ width: `${token.sentiment}%` }}
              ></div>
            </div>
            <span className="text-fg font-medium">{token.sentiment}%</span>
          </div>
        </div>
      </div>
    </button>
  )
}
