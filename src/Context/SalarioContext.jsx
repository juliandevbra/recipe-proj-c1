import { createContext, useContext, useState } from "react";

const GlobalStates = createContext()

const SalarioContext = ({children}) => {
    const [salario, setSalario] = useState(250000)
    return (
        <GlobalStates.Provider value={{salario, setSalario}}>
            {children}
        </GlobalStates.Provider>
    )
}

export default SalarioContext;

export const useGlobalStates = () => useContext(GlobalStates)