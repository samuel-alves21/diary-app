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
import { InputsProvider } from "../../contexts/inputsContext"
import { SearchProvider } from "../../contexts/searchContext"
import { UserContext } from "../../contexts/userContext"
import { LoadingContext } from "../../contexts/loadingContext"
import { Loader } from "../../components/Loader"
import { fetchData } from "../../functions/fetchData"

export const HomePage = () => {
  const  { setLoading }  = useContext(LoadingContext)
  const navigate = useNavigate()
  const { userState: { user, contacts } , userDispatch} = useContext(UserContext)
  useEffect(() => {
    if (!user) navigate('/sign-in')
  }, [navigate, user])

  useEffect(() => {
    if (user) {
      setLoading(true)
      fetchData(user, userDispatch)
      setLoading(false)
    }
  }, [setLoading, user, userDispatch])

  return (
    <HomePageContainer className="home-page">
      <SearchProvider>
        <EditToggleProvider>
          <InputsProvider>
            { contacts === '' ? <Loader /> :
            <>
              <Filter />
              <EditWindow />
              <Nav />
              <UserMessage />
              <Contacts />
              <Footer />
            </> }
          </InputsProvider>
        </EditToggleProvider>
      </SearchProvider>
    </HomePageContainer>
  )
}

const HomePageContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
