import { ref, push} from "firebase/database"
import { database } from "../../App"

export const createContacts = (user, inputValue) => {
  const { name, email, tel } = inputValue
  const contactRef = ref(database, `users/${user.uid}/contacts/`)
  push(contactRef, {name, email, tel})
}