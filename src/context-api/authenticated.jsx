import { createContext, useState } from "react";

const authenticatedContext = createContext()

function AuthenticatedContextProvider ({children}) {

    const [authenticated, setAuthenticated] = useState(false)

    return (
        <authenticatedContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
        </authenticatedContext.Provider>
    )
}

export {authenticatedContext, AuthenticatedContextProvider}