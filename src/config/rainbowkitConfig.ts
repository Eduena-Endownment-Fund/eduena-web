import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

export const rainbowkitConfig = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "",
  chains: [mainnet, polygon, optimism, arbitrum, base],
});