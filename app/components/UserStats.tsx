'use client'

import { TrendingUp, Zap, Trophy, Calendar } from 'lucide-react'

export function UserStats() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl">
            🎯
          </div>
          <div>
            <h2 className="text-2xl font-bold text-fg">Your Profile</h2>
            <p className="text-fg/60">FID: 12345</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-fg/60">Member Since</p>
            <p className="text-lg font-bold text-fg">Jan 2024</p>
          </div>
          <div>
            <p className="text-sm text-fg/60">Rank</p>
            <p className="text-lg font-bold text-fg">#42</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          icon={<TrendingUp className="w-6 h-6 text-success" />}
          label="Total Volume"
          value="$125,430"
          subtitle="+12.5% this week"
        />
        <StatCard
          icon={<Zap className="w-6 h-6 text-primary" />}
          label="Total Swaps"
          value="234"
          subtitle="15 this week"
        />
        <StatCard
          icon={<Trophy className="w-6 h-6 text-warning" />}
          label="Total Profit"
          value="$12,543"
          subtitle="+8.2% this week"
        />
        <StatCard
          icon={<Calendar className="w-6 h-6 text-accent" />}
          label="Active Days"
          value="45"
          subtitle="Last 60 days"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-surface rounded-lg p-6 border border-primary/20">
        <h3 className="text-lg font-bold text-fg mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <ActivityItem
            type="swap"
            description="Swapped 0.5 ETH for 21,367 DEGEN"
            time="2 hours ago"
            status="success"
          />
          <ActivityItem
            type="rank"
            description="Moved up to rank #42"
            time="1 day ago"
            status="success"
          />
          <ActivityItem
            type="swap"
            description="Swapped 1.2 ETH for 51,282 DEGEN"
            time="2 days ago"
            status="success"
          />
        </div>
      </div>

      {/* Token Holdings */}
      <div className="bg-surface rounded-lg p-6 border border-primary/20">
        <h3 className="text-lg font-bold text-fg mb-4">Token Holdings</h3>
        <div className="space-y-3">
          <TokenHolding
            symbol="ETH"
            name="Ethereum"
            amount="1.234"
            value="$2,468"
          />
          <TokenHolding
            symbol="DEGEN"
            name="Degen"
            amount="72,649"
            value="$1,700"
          />
          <TokenHolding
            symbol="HIGHER"
            name="Higher"
            amount="45,123"
            value="$704"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  subtitle,
}: {
  icon: React.ReactNode
  label: string
  value: string
  subtitle: string
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/20">
      <div className="flex items-center space-x-3 mb-2">
        {icon}
        <p className="text-sm text-fg/60">{label}</p>
      </div>
      <p className="text-2xl font-bold text-fg mb-1">{value}</p>
      <p className="text-sm text-fg/60">{subtitle}</p>
    </div>
  )
}

function ActivityItem({
  type,
  description,
  time,
  status,
}: {
  type: string
  description: string
  time: string
  status: string
}) {
  return (
    <div className="flex items-center justify-between bg-bg rounded-lg p-3 border border-primary/10">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-success rounded-full"></div>
        <div>
          <p className="text-sm text-fg">{description}</p>
          <p className="text-xs text-fg/60">{time}</p>
        </div>
      </div>
    </div>
  )
}

function TokenHolding({
  symbol,
  name,
  amount,
  value,
}: {
  symbol: string
  name: string
  amount: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between bg-bg rounded-lg p-3 border border-primary/10">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary rounded-full"></div>
        <div>
          <p className="font-bold text-fg">{symbol}</p>
          <p className="text-sm text-fg/60">{name}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-fg">{amount}</p>
        <p className="text-sm text-fg/60">{value}</p>
      </div>
    </div>
  )
}
