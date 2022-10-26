import '../styles/globals.css'
//RainbowKit

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
//

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Lottery",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {

return (
<WagmiConfig client={wagmiClient}>
<RainbowKitProvider
          chains={chains}
          showRecentTransactions={true}
        //   theme={rainbowTheme({
        //     accentColor: "#8FC837",
        //     borderRadius: "medium",
        //   })}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
</WagmiConfig>

)


  return 
}

export default MyApp
