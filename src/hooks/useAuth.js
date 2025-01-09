import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState(null)

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    try {
      if (window.solana) {
        const response = await window.solana.connect({ onlyIfTrusted: true })
        setAddress(response.publicKey.toString())
        setIsConnected(true)
      }
    } catch (error) {
      console.log('Not connected')
    }
  }

  const connect = async () => {
    try {
      if (window.solana) {
        const response = await window.solana.connect()
        setAddress(response.publicKey.toString())
        setIsConnected(true)
        return true
      }
    } catch (error) {
      console.error('Connection failed:', error)
      return false
    }
  }

  const disconnect = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect()
        setAddress(null)
        setIsConnected(false)
      }
    } catch (error) {
      console.error('Disconnect failed:', error)
    }
  }

  return {
    isConnected,
    address,
    connect,
    disconnect
  }
}
