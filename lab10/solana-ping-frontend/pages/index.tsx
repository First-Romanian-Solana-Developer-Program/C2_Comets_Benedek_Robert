import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
 import { AppBar } from '../components/AppBar'
 import { PingButton } from '../components/PingButton'
import Head from 'next/head'
import { WalletContextProvider } from '../components/WalletContextProvider'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <WalletContextProvider>
        <AppBar />
           <PingButton />
            
       </WalletContextProvider >
    </div>
  );
}

export default Home;