'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react"

// interface ContextProps {
//     userId: '1',
//     bool: true,
//     lang: 'en'
    
// }

const globalContext = createContext({
    usrId: '1',
    lang: 'en',
    bool:true,
})

export const GlobalContextProvider = ({ children }) => {
    const [usrId, setUsrId] = useState('');
    const [lang, setLang] = useState('');
    const [bool, setBool] = useState('');

    return (
        <globalContext.Provider value={{ usrId, lang, setUsrId, setLang }}>
            {children}
        </globalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(globalContext);

