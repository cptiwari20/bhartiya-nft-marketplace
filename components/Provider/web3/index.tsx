import { ethers } from "ethers";
import { createContext, FunctionComponent, useContext, useEffect, useState } from "react"
import { web3States, createDefaultStates } from "./utils";

const Web3Context = createContext<web3States
>(createDefaultStates());

const Web3Provider: FunctionComponent<web3States> = ({children}) => {
  const [web3Api, setWeb3Api] = useState<web3States>(createDefaultStates())

  useEffect(() => {
    initWeb3States()
  }, [])

  const initWeb3States = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any)
    setWeb3Api({
      ethereum: window.ethereum,
      provider: provider,
      contract: null,
      isLoading: false
    })
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