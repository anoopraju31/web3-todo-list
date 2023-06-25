import React from 'react'
import ReactDOM from 'react-dom/client'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import '@rainbow-me/rainbowkit/styles.css'
import './index.css'

const { chains, provider } = configureChains(
	[chain.sepolia],
	[
		alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
		publicProvider(),
	],
)
const { connectors } = getDefaultWallets({
	appName: 'Todo List Dapp',
	chains,
})
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains} coolMode>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</RainbowKitProvider>
		</WagmiConfig>
	</React.StrictMode>,
)
