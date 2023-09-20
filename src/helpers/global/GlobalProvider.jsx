import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export default function GlobalProvider({children}) {
    const [user, setUser] = useState(null);
    const [searchText, setSearchText] = useState("");

    const contextValue = {
        user,
        searchText,
        setSearchText
    }

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}

export function useGlobal() {
    return useContext(GlobalContext)
}