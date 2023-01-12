import useSWR from "swr";
import { CryptoHookFactory } from "../../types/hooks";

export const HooksFactory:CryptoHookFactory = (deps) => (params) => {
    const resp = useSWR('web3/getAccounts', () => {
        console.log(deps)
        console.log(params)
        return "Test hook"
    })
    return resp
};
