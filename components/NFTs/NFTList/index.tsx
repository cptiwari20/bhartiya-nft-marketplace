import { FunctionComponent } from 'react'
import { NFTMeta } from '../../../types/nfts'
import Item from '../Item'

type NFTListProps = {
    nfts: NFTMeta[]
}

const NFTList: FunctionComponent<NFTListProps> = ({nfts}) => {
    return <>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {nfts.map((nft, idx) => {
                return <div  key={`${nft.image}` + idx} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <Item nft={nft} />
                </div>
            })}
        </div>
    </>
}

export default NFTList