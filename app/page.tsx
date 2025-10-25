'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Trophy, Zap, ArrowRight, TrendingDown } from 'lucide-react'
import { ConnectWallet } from './components/ConnectWallet'
import { TrendingTokens } from './components/TrendingTokens'
import { SwapInterface } from './components/SwapInterface'
import { Leaderboard } from './components/Leaderboard'
import { UserStats } from './components/UserStats'

type View = 'home' | 'swap' | 'leaderboard' | 'profile'

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('home')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Simulate frame ready
    setIsReady(true)
  }, [])

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-fg">SwapVerse</h1>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-surface border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-2 overflow-x-auto">
            <NavButton
              active={currentView === 'home'}
              onClick={() => setCurrentView('home')}
              icon={<TrendingUp className="w-4 h-4" />}
              label="Trending"
            />
            <NavButton
              active={currentView === 'swap'}
              onClick={() => setCurrentView('swap')}
              icon={<Zap className="w-4 h-4" />}
              label="Swap"
            />
            <NavButton
              active={currentView === 'leaderboard'}
              onClick={() => setCurrentView('leaderboard')}
              icon={<Trophy className="w-4 h-4" />}
              label="Leaderboard"
            />
            <NavButton
              active={currentView === 'profile'}
              onClick={() => setCurrentView('profile')}
              icon={<Users className="w-4 h-4" />}
              label="Profile"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentView === 'home' && <HomeView onSwapClick={() => setCurrentView('swap')} />}
        {currentView === 'swap' && <SwapInterface />}
        {currentView === 'leaderboard' && <Leaderboard />}
        {currentView === 'profile' && <UserStats />}
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-primary/20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-fg/60">
            <p>SwapVerse - Socialized Trading on Base</p>
            <p className="mt-1">Powered by OnchainKit & Farcaster</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function NavButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        active
          ? 'bg-primary text-white'
          : 'text-fg/70 hover:text-fg hover:bg-primary/10'
      }`}
    >
      {icon}
      <span className="text-sm font-medium whitespace-nowrap">{label}</span>
    </button>
  )
}

function HomeView({ onSwapClick }: { onSwapClick: () => void }) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
        <h2 className="text-2xl font-bold text-fg mb-2">
          Welcome to SwapVerse
        </h2>
        <p className="text-fg/70 mb-4">
          Discover trending tokens, execute gasless swaps, and compete with the best traders on Base.
        </p>
        <button
          onClick={onSwapClick}
          className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-all duration-200"
        >
          <span className="font-medium">Start Trading</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={<TrendingUp className="w-6 h-6 text-success" />}
          label="24h Volume"
          value="$2.4M"
          change="+12.5%"
          positive
        />
        <StatCard
          icon={<Users className="w-6 h-6 text-primary" />}
          label="Active Traders"
          value="1,234"
          change="+8.2%"
          positive
        />
        <StatCard
          icon={<Zap className="w-6 h-6 text-warning" />}
          label="Total Swaps"
          value="5,678"
          change="+15.3%"
          positive
        />
      </div>

      {/* Trending Tokens */}
      <TrendingTokens onTokenSelect={onSwapClick} />
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  change,
  positive,
}: {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  positive: boolean
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/20">
      <div className="flex items-center justify-between mb-2">
        {icon}
        <span
          className={`text-sm font-medium ${
            positive ? 'text-success' : 'text-error'
          }`}
        >
          {change}
        </span>
      </div>
      <p className="text-sm text-fg/60 mb-1">{label}</p>
      <p className="text-2xl font-bold text-fg">{value}</p>
    </div>
  )
}
