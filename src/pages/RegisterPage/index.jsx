import styled from 'styled-components'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { LoginHeader } from '../../components/Login/LoginHeader'
import { Register } from '../../components/Login/Register'
import { UserContext } from '../../contexts/userContext'
import { LoadingContext } from '../../contexts/loadingContext'
import { Loader } from '../../components/Loader'
import { useState } from 'react'
import { RedirectingMsg } from '../../components/Login/RedirectingMsg'
import { LoginFooter } from '../../components/Login/LoginFooter'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const {
    userState: { user },
  } = useContext(UserContext)
  const { loading } = useContext(LoadingContext)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    if (user) {
      if (shouldRedirect) {
        navigate('/')
      }
    }
  }, [user, navigate, shouldRedirect])

  return (
    <LoginPageContainer>
      {user ? (
        <RedirectingMsg setShouldRedirect={setShouldRedirect} />
      ) : (
        <>
          <LoginHeader />
          {loading ? <Loader /> : <Register />}
          <LoginFooter />
        </>
      )}
    </LoginPageContainer>
  )
}

const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
