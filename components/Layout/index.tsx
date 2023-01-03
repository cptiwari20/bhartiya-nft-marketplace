import { AppProps } from "next/app"
import { Head } from "next/document"
import { FunctionComponent, ReactElement } from "react"
import Navbar from "./Navbar"

type BaseLayoutProps = {
    children: ReactElement
}
const BaseLayout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    return <>
    <Navbar />
    <div className="py-16 overflow-hidden min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            {children}
        </div>
    </div>
    </>
}

export default BaseLayout