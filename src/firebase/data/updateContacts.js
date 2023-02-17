import { ref, update } from 'firebase/database'
import { database } from '../../App'

export const updateContacts = (user, inputValue) => {
  const {
    name,
    email,
    tel,
    action: { id },
  } = inputValue
  const contactRef = ref(database, `users/${user.uid}/contacts/${id}/`)
  update(contactRef, { name, email, tel })
}
