export const readContacts = (userDispatch, snap) => {
  let contacts = []

  snap.forEach((child) => {

    let cont = 0
    let contactObj = {}

    child.forEach(((value) => {
      
      cont++
      if (cont === 1) contactObj.email = value._node.value_
      if (cont === 2) contactObj.name = value._node.value_
      if (cont === 3) {
        contactObj.tel = value._node.value_
        contactObj.id = child.key
      }
    }))

    contacts.push(contactObj)
  })

  if (contacts.length) {
    userDispatch({ types: 'setContacts', payload: contacts })
  } else {
    userDispatch({ types: 'setContacts', payload: undefined })
  }
}
