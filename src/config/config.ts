import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { defineChain } from "viem";
import { http } from "wagmi";

const virtual_mainnet = defineChain({
  id: 1,
  name: 'Virtual Mainnet',
  iconUrl: 'img/tenderly.svg',
  iconBackground: '#fff',
  nativeCurrency: { name: 'VETH', symbol: 'VETH', decimals: 18 },
  rpcUrls: {
    default: { http: [process.env.NEXT_PUBLIC_VIRTUAL_MAINNET_RPC_URL ?? ''] }
  },
  blockExplorers: {
    default: {
      name: 'Tenderly Explorer',
      url: process.env.NEXT_PUBLIC_VIRTUAL_MAINNET_RPC_URL ?? ''
    }
  },
});

export const config = getDefaultConfig({
  appName: "Eduena",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID ?? '',
  chains: [virtual_mainnet],
  transports: {
    [virtual_mainnet.id]: http(process.env.NEXT_PUBLIC_VIRTUAL_MAINNET_RPC_URL ?? '')
  }
});