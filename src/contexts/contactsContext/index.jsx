import { createContext, useReducer } from "react";

export const ContactsContext = createContext()

const data = {
  user: 'Samuel',
  contacts: [
    {
      name: 'Samuel Alves Theodoro',
      email: 'samueltheodoro21@gmail.com',
      tel: '(31) 97112-2156',
    },
    {
      name: 'Ludmila Alves Theodoro',
      email: 'ludmilatheodoro21@gmail.com',
      tel: '(31) 97121-2156',
    },
    {
      name: 'Antonio Guedes Theodoro',
      email: 'antoniotheodoro21@gmail.com',
      tel: '(31) 95662-2666',
    }
  ]
}

const reducer = (state, action) => {
  return { ...state }
}

export const ContactsProvider = ({ children }) => {
  const [ contactsState, contactsDispatch ] = useReducer(reducer, data)

  return (
    <ContactsContext.Provider 
    value={{ contactsState, contactsDispatch }}>
      { children }
    </ContactsContext.Provider>
  )

} 