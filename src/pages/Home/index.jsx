import styled from "styled-components"
import { Contacts } from "../../components/Contacts"
import { EditWindow } from "../../components/EditWindow"
import { Footer } from "../../components/Footer"
import { Nav } from "../../components/Nav"
import { UserMessage } from "../../components/UserMessage"
import { EditToggleProvider } from "../../contexts/editContext"
import { SearchProvider } from "../../contexts/searchContext"

export const Home = () => {
  return (
    <HomePageContainer className="home-page">
      <SearchProvider>
        <Nav />
        <EditToggleProvider>
          <EditWindow />
          <UserMessage />
          <Contacts />
        </EditToggleProvider>
      </SearchProvider>
      <Footer />
    </HomePageContainer>
  )
}

const HomePageContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
