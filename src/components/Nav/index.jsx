import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Logo } from "../Logo"
import { Logout } from "../Logout"
import { SearchField } from "../SearchField"

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

const NavContainer = styled.div`
  background-color: var(--color-primary);

  height: 55px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 430px) {
    padding: 5px;
  }
`
