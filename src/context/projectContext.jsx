import { useState, useEffect, createContext } from "react";
import Data from "../Data/Data"

const Context = createContext()

function ContextProvider({children}) {
    const [data, setData] = useState(Data)
    const [toggleOn, setToggleOn] = useState(false)

    function toggler(){
        setToggleOn(prevState => !prevState)
    }

    return(
        <Context.Provider value={{data, toggleOn, toggler}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}