'use client'

import { useState } from 'react'
import { ArrowDown, Settings2, Zap, Info } from 'lucide-react'

export function SwapInterface() {
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [isSwapping, setIsSwapping] = useState(false)

  const handleSwap = async () => {
    setIsSwapping(true)
    // Simulate swap transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSwapping(false)
    // Show success notification
  }

  return (
    <div className="max-w-md mx-auto space-y-4 animate-fade-in">
      {/* Swap Card */}
      <div className="bg-surface rounded-lg p-6 border border-primary/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-fg">Swap Tokens</h3>
          <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
            <Settings2 className="w-5 h-5 text-fg/60" />
          </button>
        </div>

        {/* From Token */}
        <div className="space-y-2 mb-2">
          <label className="text-sm text-fg/60">From</label>
          <div className="bg-bg rounded-lg p-4 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <input
                type="text"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-2xl font-bold text-fg outline-none w-full"
              />
              <button className="flex items-center space-x-2 bg-surface px-3 py-2 rounded-lg border border-primary/30 hover:border-primary/50 transition-colors">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
                <span className="font-medium text-fg">ETH</span>
              </button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-fg/60">Balance: 1.234 ETH</span>
              <button className="text-primary hover:text-accent font-medium">
                MAX
              </button>
            </div>
          </div>
        </div>

        {/* Swap Direction Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <button className="bg-surface border-4 border-bg p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <ArrowDown className="w-5 h-5 text-fg" />
          </button>
        </div>

        {/* To Token */}
        <div className="space-y-2 mt-2">
          <label className="text-sm text-fg/60">To</label>
          <div className="bg-bg rounded-lg p-4 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <input
                type="text"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-2xl font-bold text-fg outline-none w-full"
              />
              <button className="flex items-center space-x-2 bg-surface px-3 py-2 rounded-lg border border-primary/30 hover:border-primary/50 transition-colors">
                <div className="w-6 h-6 bg-warning rounded-full"></div>
                <span className="font-medium text-fg">DEGEN</span>
              </button>
            </div>
            <div className="text-sm text-fg/60">Balance: 0 DEGEN</div>
          </div>
        </div>

        {/* Swap Details */}
        <div className="mt-4 space-y-2 bg-bg rounded-lg p-4 border border-primary/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-fg/60">Rate</span>
            <span className="text-fg font-medium">1 ETH = 42,735 DEGEN</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-fg/60">Slippage</span>
            <span className="text-fg font-medium">0.5%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-fg/60">Gas Fee</span>
              <Zap className="w-3 h-3 text-success" />
            </div>
            <span className="text-success font-medium">Sponsored</span>
          </div>
        </div>

        {/* Gas Sponsorship Notice */}
        <div className="mt-4 flex items-start space-x-2 bg-primary/10 rounded-lg p-3 border border-primary/30">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-fg/80">
            This swap is gasless! Transaction fees are sponsored by SwapVerse.
          </p>
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          disabled={isSwapping || !fromAmount}
          className="w-full mt-6 bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-accent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSwapping ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              <span>Swapping...</span>
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              <span>Swap Now</span>
            </>
          )}
        </button>
      </div>

      {/* Recent Swaps */}
      <div className="bg-surface rounded-lg p-4 border border-primary/20">
        <h4 className="text-sm font-bold text-fg mb-3">Recent Swaps</h4>
        <div className="space-y-2">
          <RecentSwapItem
            from="0.5 ETH"
            to="21,367 DEGEN"
            time="2 min ago"
            status="confirmed"
          />
          <RecentSwapItem
            from="1.2 ETH"
            to="51,282 DEGEN"
            time="15 min ago"
            status="confirmed"
          />
        </div>
      </div>
    </div>
  )
}

function RecentSwapItem({
  from,
  to,
  time,
  status,
}: {
  from: string
  to: string
  time: string
  status: string
}) {
  return (
    <div className="flex items-center justify-between text-sm bg-bg rounded-lg p-3 border border-primary/10">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-success rounded-full"></div>
        <span className="text-fg">
          {from} → {to}
        </span>
      </div>
      <span className="text-fg/60">{time}</span>
    </div>
  )
}
