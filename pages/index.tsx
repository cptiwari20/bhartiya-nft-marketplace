import Head from 'next/head'
import BaseLayout from '../components/Layout'
import NFTList from '../components/NFTs/NFTList'
import nftsJsonData from '../content/meta.json'
import { NFTMeta } from '../types/nfts'

export default function Home() {
  return <BaseLayout>
      <h1>Hello to NFTs!!</h1>
      <NFTList 
        nfts={nftsJsonData as NFTMeta[]}
      />
  </BaseLayout>
}
