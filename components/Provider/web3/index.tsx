import { ethers } from "ethers";
import { createContext, FunctionComponent, ProviderProps, useContext, useEffect, useState } from "react"
import { web3States, createDefaultStates, loadContract } from "./utils";

const Web3Context = createContext<web3States
>(createDefaultStates());

interface Web3ProviderProps {
  children: any
}

const Web3Provider: FunctionComponent<Web3ProviderProps> = ({children}) => {
  const [web3Api, setWeb3Api] = useState<web3States>(createDefaultStates())

  useEffect(() => {
    initWeb3States()
  }, [])

  const initWeb3States = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any)
      const contract = await loadContract('NFTMarket', provider)
  
      setWeb3Api({
        ethereum: window.ethereum,
        provider: provider,
        contract,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;