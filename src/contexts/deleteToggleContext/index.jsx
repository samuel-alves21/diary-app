import { createContext, useState } from "react";

export const DeleteToggleContext = createContext()

export const DeleteToggleProvider = ({ children }) => {
  const [ deleteToggle, setDeleteToggle ] = useState(false)

  return (
    <DeleteToggleContext.Provider value={{ deleteToggle, setDeleteToggle }}>
      {children}
    </DeleteToggleContext.Provider>
  )
}