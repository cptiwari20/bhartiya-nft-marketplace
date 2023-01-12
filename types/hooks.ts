import { MetaMaskInpageProvider } from "@metamask/providers"
import { providers,Contract } from "ethers"
import { SWRResponse } from "swr"

export type Web3Dependencies = {
    ethereum: MetaMaskInpageProvider
    provider: providers.Web3Provider
    contract: Contract
}

export type CryptoHookFactory = {
    (d: Partial<Web3Dependencies>): CryptoHandlerHook
}

export type CryptoHandlerHook = (params: any) => CryptoSWRResponse
export type CryptoSWRResponse = SWRResponse