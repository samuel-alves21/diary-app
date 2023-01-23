import styled from "styled-components"

import { Contacts } from "../../components/Contacts"
import { Footer } from "../../components/Footer"
import { Nav } from "../../components/Nav"
import { UserMessage } from "../../components/UserMessage"

export const Home = () => {
  return (
    <HomePageContainer>
      <Nav />
      <UserMessage />
      <Contacts />
      <Footer />
    </HomePageContainer>
  )
}

const HomePageContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
