import styled from "styled-components"
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router"
import { Footer } from "../../components/Footer"
import { LoginHeader } from "../../components/Login/LoginHeader"
import { Register } from "../../components/Login/Register"
import { InputErrorMsgProvider } from "../../contexts/InputErrorMsgContext"
import { UserContext } from "../../contexts/userContext"
import { LoadingContext } from "../../contexts/loadingContext"
import { Loader } from "../../components/Loader"
import { useState } from "react"
import { RedirectingMsg } from "../../components/Login/RedirectingMsg"

export const RegisterPage = () => {
  const navigate = useNavigate()
  const { userState: { user } } = useContext(UserContext)
  const { loading } = useContext(LoadingContext)
  const [ shouldRedirect, setShouldRedirect ] = useState(false)

  useEffect(() => {
    if (user) {
      if (shouldRedirect) {
        navigate('/')
      }
    }
  }, [user, navigate, shouldRedirect])

  return (
    <LoginPageContainer>
      <InputErrorMsgProvider>
        { user ? 
        <RedirectingMsg setShouldRedirect={setShouldRedirect}/> :
        <>
          <LoginHeader />
          {loading ? <Loader /> : <Register />}
          <Footer />
        </> }
      </InputErrorMsgProvider>
    </LoginPageContainer>
  )
}

const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
