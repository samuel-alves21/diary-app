import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../App'

export const userSignIn = (email, password, setError, error, setLoading) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setError({ ...error, hasError: false, errorMsg: '' })
    })
    .catch(() => {
      setError({
        ...error,
        hasError: true,
        errorMsg: 'invalid email or password!',
      })
    })
    .finally(() => setLoading(false))
}
