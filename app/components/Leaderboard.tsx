'use client'

import { Trophy, TrendingUp, Medal } from 'lucide-react'

interface LeaderboardEntry {
  rank: number
  username: string
  fid: number
  volume: string
  profit: string
  trades: number
  avatar: string
}

const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    username: 'cryptowhale',
    fid: 1234,
    volume: '$2.4M',
    profit: '+$124K',
    trades: 1234,
    avatar: '🐋',
  },
  {
    rank: 2,
    username: 'degentrader',
    fid: 5678,
    volume: '$1.8M',
    profit: '+$89K',
    trades: 987,
    avatar: '🚀',
  },
  {
    rank: 3,
    username: 'basedbuilder',
    fid: 9012,
    volume: '$1.2M',
    profit: '+$67K',
    trades: 756,
    avatar: '🏗️',
  },
  {
    rank: 4,
    username: 'swapmaster',
    fid: 3456,
    volume: '$980K',
    profit: '+$45K',
    trades: 654,
    avatar: '⚡',
  },
  {
    rank: 5,
    username: 'tokenking',
    fid: 7890,
    volume: '$850K',
    profit: '+$38K',
    trades: 543,
    avatar: '👑',
  },
]

export function Leaderboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-fg">Top Traders</h2>
            <p className="text-sm text-fg/60">Weekly leaderboard</p>
          </div>
        </div>
        <button className="bg-surface text-fg px-4 py-2 rounded-lg border border-primary/30 hover:border-primary/50 transition-colors text-sm font-medium">
          Share
        </button>
      </div>

      {/* Leaderboard Tabs */}
      <div className="flex space-x-2 bg-surface rounded-lg p-1 border border-primary/20">
        <button className="flex-1 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Volume
        </button>
        <button className="flex-1 text-fg/60 hover:text-fg px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Profit
        </button>
        <button className="flex-1 text-fg/60 hover:text-fg px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Trades
        </button>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {mockLeaderboard.map((entry) => (
          <LeaderboardCard key={entry.fid} entry={entry} />
        ))}
      </div>

      {/* Your Rank */}
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-4 border border-primary/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🎯</div>
            <div>
              <p className="text-sm text-fg/60">Your Rank</p>
              <p className="text-lg font-bold text-fg">#42</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-fg/60">Volume</p>
            <p className="text-lg font-bold text-fg">$125K</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function LeaderboardCard({ entry }: { entry: LeaderboardEntry }) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Medal className="w-5 h-5 text-warning" />
    if (rank === 2) return <Medal className="w-5 h-5 text-fg/60" />
    if (rank === 3) return <Medal className="w-5 h-5 text-warning/60" />
    return null
  }

  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 bg-bg rounded-lg border border-primary/20">
            {getRankIcon(entry.rank) || (
              <span className="text-lg font-bold text-fg">{entry.rank}</span>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{entry.avatar}</div>
            <div>
              <p className="font-bold text-fg">{entry.username}</p>
              <p className="text-sm text-fg/60">FID: {entry.fid}</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-fg">{entry.volume}</p>
          <div className="flex items-center justify-end space-x-1 text-sm text-success">
            <TrendingUp className="w-4 h-4" />
            <span>{entry.profit}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-primary/10 flex items-center justify-between text-sm">
        <span className="text-fg/60">Total Trades</span>
        <span className="text-fg font-medium">{entry.trades}</span>
      </div>
    </div>
  )
}
