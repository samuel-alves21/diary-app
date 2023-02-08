import { get, onValue, ref } from "firebase/database"
import { database } from "../App"

export const fetchData = ( user, userDispatch) => {

  const onSuccess = (snap) => {
    let contacts = []

    snap.forEach((child) => {

      let cont = 0
      let contactObj = {}

      child.forEach(((value) => {
        cont++
        if (cont === 1) contactObj.email = value._node.value_
        if (cont === 2) contactObj.name = value._node.value_
        if (cont === 3) contactObj.tel = value._node.value_
      }))

      contacts.push(contactObj)
    })

    if (contacts.length) {
      userDispatch({ types: 'setContacts', payload: contacts })
    } else {
      userDispatch({ types: 'setContacts', payload: undefined })
    }
  }

  const nameRef = ref(database, `users/${user.uid}/name`)

  get(nameRef)
  .then((snap) => userDispatch({ types: 'setUserName', payload: snap.val() }))
  .catch((error) => console.log(error))

  const contactsRef = ref(database, `users/${user.uid}/contacts/`)
  onValue(contactsRef, onSuccess, (error) => console.log(error))
}