import { get, ref } from 'firebase/database'
import { database } from '../../App'

export const readUsername = (user, userDispatch) => {
  const nameRef = ref(database, `users/${user.uid}/name`)

  get(nameRef)
    .then((snap) => userDispatch({ types: 'setUserName', payload: snap.val() }))
    .catch((error) => console.log(error))
}
