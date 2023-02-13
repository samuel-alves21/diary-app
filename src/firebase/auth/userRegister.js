import { createUserWithEmailAndPassword } from "firebase/auth"
import { registerValidator } from "../../utils/registerValidator"
import { auth, database } from "../../App"
import { ref, set } from "firebase/database"

export const userRegister = (name, email, password, setError, error, setLoading) => {
  const {isCorrect, errorMessenge} = registerValidator(name, email, password)

  if (!isCorrect) {
    setError({...error, hasError: true, errorMsg: errorMessenge
    })
    setLoading(false)
    return
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    const userRef = ref(database, `users/${user.user.uid}`)
    set(userRef, { name, email })
      .catch((error) => console.log(error))
    setError({...error, hasError: false, errorMsg: ''})
  })
  .catch((e) => {
    console.log(e)
    setError({...error, hasError: true, errorMsg: 'email already in use!'})
  })
  .finally(() => setLoading(false))
}
