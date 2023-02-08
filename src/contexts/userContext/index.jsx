import { createContext, useReducer } from "react";
import { nameSort } from "../../functions/nameSort";

export const UserContext = createContext()
const data = {
  user: '',
  userName: '',
  contacts: ''
}

const reducer = (state, action) => {
  switch(action.types) {
    case 'setUser': 
      return {...state, user: action.payload}

    case 'setUserName': 
      return {...state, userName: action.payload}

    case 'setContacts': 
      return {...state, contacts: action.payload}

    case 'sort': 
      const sortedName = nameSort(state.contacts)
      return {...state, contacts: sortedName}
      
    case 'search': 
      return {...state, contacts: [...action.payload]}
      
    default :
    return { ...state }
  }
}

export const UserProvider = ({ children }) => {
  const [ userState, userDispatch ] = useReducer(reducer, data)
  
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      { children }
    </UserContext.Provider>
  )
}