import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Define the Anvil localhost chain
const anvilLocalhost = {
  id: 1337,
  name: 'Anvil Localhost',
  network: 'localhost',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
}

const transports = {
  [mainnet.id]: http(process.env.MAINNET_URL),
  [sepolia.id]: http(process.env.SEPOLIA_URL),
  [anvilLocalhost.id]: http(process.env.ANVIL_LOCALHOST_URL),
};

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, anvilLocalhost], 
  transports: transports,  
})