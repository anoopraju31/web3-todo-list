import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	getDefaultWallets,
	RainbowKitProvider,
	darkTheme,
	lightTheme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './app/store'
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
			<RainbowKitProvider
				chains={chains}
				theme={localStorage.theme === 'dark' ? darkTheme() : lightTheme()}
				coolMode>
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>
			</RainbowKitProvider>
		</WagmiConfig>
	</React.StrictMode>,
)
