import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ethers } from "ethers";
import { abi } from '../helpers/lottery';



export default function Home() {

  const [normalBalance, setNormalBalance] = React.useState(0)
  const [yourWallet, setYourWallet] = React.useState('')

  const getConnection = async ()=>{

    const provider = new ethers.providers.Web3Provider(window.ethereum);

let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];
    // provider.on('accountsChanged', function (accounts) {
    //     account = accounts[0];
    //     console.log(address); // Print new address
    // });

    const signer = provider.getSigner();

    const address = await signer.getAddress();

const balance = await provider.getBalance(address)
const balanceNormal = await ethers.utils.formatEther(balance)

// console.log(myAccount)

setNormalBalance(balanceNormal)

//CONTRACT

const myContract = new ethers.Contract('0xef8ac5Fe65d0BB2c9b53eF360f26150fD4B6fB7D', abi, provider);

console.log(myContract)


  }
  getConnection()

  //const eth = ethers.utils.getAccountPath

  



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton/>
        <h1 className={styles.title}>
         Balance:  {normalBalance}

        </h1>

        
      </main>

     
    </div>
  )
}
