import styled from 'styled-components'
import logo from '../../../img/logo.png'

export const Logo = () => {
  return (
    <LogoContainer className='logo-container'>
      <StyledLogo
        alt='logo icon'
        src={logo}
        className='logo'
      />
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
  width: 21px;

  @media screen and (max-height: 350px) {
    width: 15px;
  }
`
