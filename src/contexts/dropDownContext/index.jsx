import { createContext, useState } from "react";

export const DropDownContext = createContext()

export const DropDownProvider = ({children}) => {
  const [ on, setOn ] = useState(false)

  return (
    <DropDownContext.Provider value={{ on, setOn }}>
      {children}
    </DropDownContext.Provider>
  )
}