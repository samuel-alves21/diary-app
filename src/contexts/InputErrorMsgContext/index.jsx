import { useState } from "react";
import { createContext } from "react";

export const InputErrorMsgContext = createContext()

export const InputErrorMsgProvider = ({ children }) => {
  const [ error, setError ] = useState({
    hasError: false,
    errorMsg: ''
  })

  return (
    <InputErrorMsgContext.Provider value={{ error, setError }}>
      {children}
    </InputErrorMsgContext.Provider>
  )
}