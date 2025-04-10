import { createContext, useState } from "react"

export const MoneyContext = createContext()

export default function GlobalState({children}) {
    const [transactions, setTransactions] = useState([])

    return (
        <MoneyContext.Provider
            value={[transactions, setTransactions]}>
            {children}
        </MoneyContext.Provider>
    )
}