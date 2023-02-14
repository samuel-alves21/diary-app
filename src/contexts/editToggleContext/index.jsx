import { createContext, useState } from "react";

export const EditToggleContext = createContext()

export const EditToggleProvider = ({ children }) => {
  const [ editToggle, setEditToggle ] = useState(false)

  return (
    <EditToggleContext.Provider value={{ editToggle, setEditToggle }}>
      {children}
    </EditToggleContext.Provider>
  )
}