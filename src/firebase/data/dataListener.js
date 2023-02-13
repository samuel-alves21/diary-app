import { off, onValue, ref} from "firebase/database"
import { database } from "../../App"
import { readContacts } from "./readContacts"

export const dataListener = (removeListener, user, userDispatch, ) => {
  const onSuccess = (snap) => {
    if (removeListener) {
      off(contactsRef, "value")
      return
    }
    readContacts(userDispatch, snap)
  }

  const onError = (error) => console.log(error)

  const contactsRef = ref(database, `users/${user.uid}/contacts/`)
  onValue(contactsRef, onSuccess, onError)
}