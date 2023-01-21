import styled from 'styled-components'

import logo from'../../img/logo.png'

export const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo alt='logo icon' src={logo}/>
    </LogoContainer>
  )
}

const StyledLogo = styled.img`
  object-fit: contain;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 23px;
`