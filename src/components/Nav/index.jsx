import styled from "styled-components"
import { Logo} from "../Logo"
import { Logout } from "../Logout"
import { SearchField } from "../SearchField"

export const Nav = () => {
  return (
    <NavContainer>
      <Logo />
      <SearchField />
      <Logout />
    </NavContainer>
  )
}

const NavContainer = styled.div`
  background-color: var(--color-primary);

  height: 64px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
