import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, ethers, providers } from "ethers";

const NetworkId = process.env.NEXT_PUBLIC_NETWORK_ID;
declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider
    }
}
export type web3Params = {
    ethereum: MetaMaskInpageProvider | null,
    provider: providers.Web3Provider | null,
    contract: Contract | null
}

export type web3States = {
    isLoading: false
} & web3Params;

export function createDefaultStates(): web3States {
    return {
        ethereum: null,
        provider: null,
        contract: null,
        isLoading: false
    }
}

export async function loadContract(name:string, provider: providers.Web3Provider) : Promise<Contract> {
    if(!NetworkId){
        return Promise.reject("Network Id not found");
    }
    try {
        const data = await fetch(`/contracts/${name}.json`)
        const Artifact = await data.json();

        if(Artifact.networks[NetworkId].address){
            return new ethers.Contract(
                Artifact.networks[NetworkId].address,
                Artifact.abi,
                provider
            )
        }else{
            return Promise.reject('Contract cannot be loaded')
        }
    } catch (error) {
        console.log(error)
        return Promise.reject("Internal Server error");
    }
}