import React, {createContext, useState} from 'react';
import spanish from '../spain.json'
export const PortfolioContext = createContext();

export const PortfolioProvider= ({children})=> {
    const [data, setData] = useState(spanish);
    return (
        <PortfolioContext.Provider value={{
            data,
            setData
        }} >
        {children}
        </PortfolioContext.Provider>
    )
}
