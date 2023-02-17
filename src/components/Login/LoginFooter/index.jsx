import styled from 'styled-components'
import { FooterContainer } from '../../Footer'
import { DeveloperInfo } from '../../Footer/DeveloperInfo'
import { IconsInfo } from '../../Footer/IconsInfo'

export const LoginFooter = () => {
  return (
    <LoginFooterContainer>
      <DeveloperInfo />
      <IconsInfo />
    </LoginFooterContainer>
  )
}

const LoginFooterContainer = styled(FooterContainer)`
  margin-top: 0;
`
