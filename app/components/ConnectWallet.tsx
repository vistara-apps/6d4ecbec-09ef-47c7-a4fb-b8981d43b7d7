'use client'

import { useState } from 'react'
import { Wallet } from 'lucide-react'

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  const handleConnect = () => {
    // Simulate wallet connection
    setIsConnected(true)
    setAddress('0x1234...5678')
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setAddress(null)
  }

  if (isConnected && address) {
    return (
      <button
        onClick={handleDisconnect}
        className="flex items-center space-x-2 bg-surface text-fg px-4 py-2 rounded-lg border border-primary/30 hover:border-primary/50 transition-all duration-200"
      >
        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
        <span className="text-sm font-medium">{address}</span>
      </button>
    )
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-all duration-200"
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect Wallet</span>
    </button>
  )
}
