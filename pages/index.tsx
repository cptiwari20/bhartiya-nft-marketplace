import Head from 'next/head'
import BaseLayout from '../components/Layout'
import NFTList from '../components/NFTs/NFTList'
import { useWeb3 } from '../components/Provider/web3'
import nftsJsonData from '../content/meta.json'
import { NFTMeta } from '../types/nfts'

export default function Home() {
  const { provider, contract } = useWeb3();
  
  const getNFTInfo = async() => {
    console.log(await contract!.name())
    console.log(await contract!.symbol())
  }
  
  if (contract) {
    getNFTInfo()
  }

  const getAccounts = async () => {
    const accounts = await provider!.listAccounts();
    console.log(accounts[0]);
  }
  if (provider) {
    getAccounts();
  }
  return <BaseLayout>
    <>
      <h1>Hello to NFTs!!</h1>
      <NFTList 
        nfts={nftsJsonData as NFTMeta[]}
      />
      </>
  </BaseLayout>
}
