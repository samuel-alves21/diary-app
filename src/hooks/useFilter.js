import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/userContext"
import { SearchContext } from "../contexts/searchContext"

export const useFilter = ( setFinteredContacts) => {
  const { userState: { contacts }} = useContext(UserContext)
  const { searchValue } = useContext(SearchContext)

  useEffect(() => {
    if (contacts) {
      const temp = []
      contacts.forEach((contact) => {
        if (contact.name.toLowerCase().includes(searchValue)) {
          temp.push(contact)
        }
      })
      setFinteredContacts((filteredContacts) => {
        return {...filteredContacts, content: [...temp]}
      })
    }
  }, [searchValue, setFinteredContacts, contacts])
}