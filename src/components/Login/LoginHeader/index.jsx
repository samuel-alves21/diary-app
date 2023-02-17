import styled from 'styled-components'
import { NavContainer } from '../../Nav'
import { Logo } from '../../Nav/Logo'

export const LoginHeader = () => {
  return (
    <NavContainer>
      <Logo />
      <H2>Welcome!</H2>
    </NavContainer>
  )
}

const H2 = styled.h2`
  color: white;
  font-size: 1.3rem;
`
