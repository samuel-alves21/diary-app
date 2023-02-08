import styled from "styled-components"
import { Footer } from "../../components/Footer"
import { SingIn } from "../../components/Login/SingIn"
import { LoginHeader } from "../../components/Login/LoginHeader"
import { InputErrorMsgProvider } from "../../contexts/InputErrorMsgContext"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { LoadingContext } from "../../contexts/loadingContext"
import { Loader } from "../../components/Loader"

export const SignInPage = () => {
  const navigate = useNavigate()
  const { userState: { user } } = useContext(UserContext)
  const { loading } = useContext(LoadingContext)

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  return (
    <LoginPageContainer>
      <InputErrorMsgProvider>
        { !user && 
        <>
          <LoginHeader />
          {loading ? <Loader /> : <SingIn />}
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