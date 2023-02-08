import { createContext, useState } from "react";

export const InputsContext = createContext()

export const InputsProvider = ({ children }) => {
  const [ inputValue, setInputValue ] = useState({
    name: '',
    email: '',
    tel: '',
    action: ''
  })

  return (
    <InputsContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputsContext.Provider>
  )
}