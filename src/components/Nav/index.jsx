import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Logo } from "./Logo"
import { Logout } from "./Logout"
import { SearchField } from "./SearchField"

export const Nav = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 430px)' })

  return (
    <NavContainer className="nav-container">
      {!isSmallScreen && <Logo />}
      <SearchField />
      <Logout />
    </NavContainer>
  )
}

export const NavContainer = styled.div`
  background-color: var(--color-primary);

  height: 55px;
  width: 100vw;
  padding: 0 20px;
  z-index: 10;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 430px) {
    padding: 5px;
  }

  @media screen and (max-height: 350px) {
    height: 30px;
  }
`
