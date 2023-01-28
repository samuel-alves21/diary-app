import { useRef, useContext, useEffect } from "react"
import { ContactsContext } from "../contexts/contactsContext"
import { SearchContext } from "../contexts/searchContext"

export const useFilter = () => {
  const { contactsState:{ contacts }, contactsDispatch} = useContext(ContactsContext)
  const { searchValue } = useContext(SearchContext)

  const ref = useRef(contacts)

  useEffect(() => {
    const temp = []
    ref.current.forEach((contact) => {
      if (contact.name.toLowerCase().includes(searchValue)) {
        temp.push(contact)
      }
    })
    contactsDispatch({ types: 'set', payload: temp })
  }, [searchValue, contactsDispatch])

  return [contacts]
}