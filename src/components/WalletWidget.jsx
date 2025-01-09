import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'

export default function WalletWidget() {
  const { isConnected, address, connect, disconnect } = useAuth()
  const { showToast } = useToast()

  const handleConnect = async () => {
    try {
      const success = await connect()
      if (success) {
        showToast('Wallet connected successfully', 'success')
      } else {
        showToast('Please install Phantom wallet', 'error')
      }
    } catch (error) {
      showToast('Connection failed', 'error')
    }
  }

  const handleDisconnect = async () => {
    await disconnect()
    showToast('Wallet disconnected', 'info')
  }

  const formatAddress = (addr) => {
    if (!addr) return ''
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`
  }

  return (
    <div className="relative">
      {isConnected ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDisconnect}
          className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full font-medium text-sm border border-yellow-500/20 hover:bg-yellow-500/20 transition-all flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {formatAddress(address)}
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConnect}
          className="bg-yellow-500 text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-yellow-400 transition-colors"
        >
          Connect Wallet
        </motion.button>
      )}
    </div>
  )
}
