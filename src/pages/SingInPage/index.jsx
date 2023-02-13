import styled from "styled-components"
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router"
import { SingIn } from "../../components/Login/SingIn"
import { LoginHeader } from "../../components/Login/LoginHeader"
import { UserContext } from "../../contexts/userContext"
import { LoadingContext } from "../../contexts/loadingContext"
import { Loader } from "../../components/Loader"
import { LoginFooter } from "../../components/Login/LoginFooter"

export const SignInPage = () => {
  const navigate = useNavigate()
  const { userState: { user } } = useContext(UserContext)
  const { loading } = useContext(LoadingContext)

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  return (
    <LoginPageContainer>
      { !user && 
      <>
        <LoginHeader />
        {loading ? <Loader /> : <SingIn />}
        <LoginFooter />
      </> }
    </LoginPageContainer>
  )
}

const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`