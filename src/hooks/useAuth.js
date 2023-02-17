import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from '../App'

export const useAuth = (userDispatch) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userDispatch({ types: 'setUser', payload: user })
      } else {
        userDispatch({ types: 'setUser', payload: user })
      }
    })
  }, [userDispatch])
}
