import { ref, remove } from 'firebase/database'
import { database } from '../../App'

export const deleteContacts = (id, user) => {
  const contactRef = ref(database, `users/${user.uid}/contacts/${id}/`)
  remove(contactRef).catch((error) => console.log(error))
}
