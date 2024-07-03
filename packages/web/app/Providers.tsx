"use client";
import { useConfig } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import {
	getDefaultConfig,
	RainbowKitProvider,
	Theme
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const myCustomTheme: Theme = {
	blurs: {
		modalOverlay: "..."
	},
	colors: {
		accentColor: "",
		accentColorForeground: "white",
		actionButtonBorder: "black",
		actionButtonBorderMobile: "...",
		actionButtonSecondaryBackground: "#1b5cfe",
		closeButton: "...",
		closeButtonBackground: "...",
		connectButtonBackground: "#34C055",
		generalBorder: "#34C055",
		connectButtonText: "#0A1517",
		modalBackground: "white",
		connectButtonBackgroundError: "...",
		connectButtonInnerBackground: "...",
		connectButtonTextError: "...",
		connectionIndicator: "...",
		downloadBottomCardBackground: "...",
		downloadTopCardBackground: "...",
		error: "...",
		generalBorderDim: "...",
		menuItemBackground: "...",
		modalBackdrop: "...",
		modalBorder: "...",
		modalText: "#1E1E1E",
		modalTextDim: "#1E1E1E",
		modalTextSecondary: "#1E1E1E",
		profileAction: "...",
		profileActionHover: "...",
		profileForeground: "...",
		selectedOptionBorder: "...",
		standby: "..."
	},
	radii: {
		actionButton: "9999px",
		connectButton: "12px",
		menuButton: "12px",
		modal: "24px",
		modalMobile: "28px"
	},
	fonts: {
		body: "'DM Sans', sans-serif"
	},
	shadows: {
		connectButton: "...",
		dialog: "...",
		profileDetailsAction: "...",
		selectedOption: "...",
		selectedWallet: "...",
		walletLogo: "..."
	}
};
export default function Providers({ children }: any) {
	const queryClient = new QueryClient();

	const config = getDefaultConfig({
		appName: "LEADVOTE",
		projectId: "YOUR_PROJECT_ID",
		chains: [mainnet],
		ssr: true // If your dApp uses server side rendering (SSR)
	});

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider coolMode theme={myCustomTheme}>
					<ThirdwebProvider
						clientId="9ab18b41f7800bdae431e8b6f1648479" // You can get a client id from dashboard settings
						activeChain="sepolia"
					>
						{children}
					</ThirdwebProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
