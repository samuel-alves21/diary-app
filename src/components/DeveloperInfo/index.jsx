import styled from "styled-components"

import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'

export const DeveloperInfo = () => {
  return (
    <DeveloperInfoContaner>
      <Info className="p-footer" >Developed by <Developer className="p-footer" >Samuel Alves</Developer></Info>
      <Link

      href="https://github.com/samuel-alves21" 
      target="_blank" 
      rel="noreferrer">

        <Github className="p-github" />
      </Link>
      <Link 
      
      href="https://www.instagram.com/samuel_alves.21/" 
      target="_blank" 
      rel="noreferrer">
        
        <Instagram className="p-instagram" />
      </Link>
    </DeveloperInfoContaner>
  )
}

const DeveloperInfoContaner = styled.div`
  display: flex;
  align-items: center
`

const Info = styled.p`
  font-weight: lighter;
`
const Developer = styled.span`
  font-weight: bold;
`

const Github = styled(GitHubIcon)`
  font-size: 23px !important;
  margin-left: 10px;
`

const Instagram = styled(InstagramIcon)`
  font-size: 25px !important;
  margin-left: 10px;
`

const Link = styled.a`
  &:visited {
    color: white;
  }

  &:hover {
    color: var(--color-secundary); 
  }
`