import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Eduena",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID ?? '',
  chains: [mainnet, sepolia],
});