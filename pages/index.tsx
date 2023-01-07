import Head from 'next/head'
import BaseLayout from '../components/Layout'
import NFTList from '../components/NFTs/NFTList'
import { useWeb3 } from '../components/Provider/web3'
import nftsJsonData from '../content/meta.json'
import { NFTMeta } from '../types/nfts'

export default function Home() {
  const response = useWeb3();
  console.log(response)
  return <BaseLayout>
      <h1>Hello to NFTs!!</h1>
      <NFTList 
        nfts={nftsJsonData as NFTMeta[]}
      />
  </BaseLayout>
}
