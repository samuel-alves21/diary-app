import styled from "styled-components"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { Contacts } from "../../components/Contacts"
import { EditWindow } from "../../components/EditWindow"
import { Filter } from "../../components/Filter"
import { Footer } from "../../components/Footer"
import { Nav } from "../../components/Nav"
import { UserMessage } from "../../components/UserMessage"
import { EditToggleProvider } from "../../contexts/editContext"
import { SearchProvider } from "../../contexts/searchContext"
import { UserContext } from "../../contexts/userContext"
import { Loader } from "../../components/Loader"
import { dataListener } from "../../firebase/data/dataListener"
import { readUsername } from "../../firebase/auth/readUserName"
import { InputsProvider } from "../../contexts/inputsContext"

export const HomePage = () => {
  const navigate = useNavigate()
  const { userState: { user, contacts } , userDispatch} = useContext(UserContext)
  
  useEffect(() => {
    if (!user) navigate('/sign-in')
    if (user) {
      dataListener(false, user, userDispatch)
      readUsername(user, userDispatch)
    }
  
    return (() => {
      if (user) dataListener(true, user, userDispatch)
    })
  }, [user, userDispatch, navigate])

  return (
    <HomePageContainer className="home-page">
      <SearchProvider>
        <InputsProvider>
        <EditToggleProvider>
            { contacts === '' ? <Loader /> :
            <>
              <Filter />
              <EditWindow />
              <Nav />
              <UserMessage />
              <Contacts />
              <Footer />
            </> }
        </EditToggleProvider>
        </InputsProvider>
      </SearchProvider>
    </HomePageContainer>
  )
}

const HomePageContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  position: relative;
`
