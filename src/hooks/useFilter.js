import { useRef, useContext, useEffect } from "react"
import { UserContext } from "../contexts/userContext"
import { SearchContext } from "../contexts/searchContext"

export const useFilter = () => {
  const { userState: { contacts }, userDispatch} = useContext(UserContext)
  const { searchValue } = useContext(SearchContext)

  const ref = useRef(contacts)
  console.log(ref.current)
  useEffect(() => {
    if (ref.current) {
      
      const temp = []
      ref.current.forEach((contact) => {
        if (contact.name.toLowerCase().includes(searchValue)) {
          temp.push(contact)
        }
      })
      userDispatch({ types: 'search', payload: temp })
    }
  }, [searchValue, userDispatch])

  return [contacts]
}