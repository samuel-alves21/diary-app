import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { auth } from '../../../App'

export const Logout = () => {
  const handleClick = () => {
    auth
      .signOut()
      .then(() => navigate('/sign-in'))
      .catch((e) => console.log(e))
  }

  const navigate = useNavigate()

  return (
    <LogoutIcon
      className='logout'
      onClick={handleClick}
    />
  )
}

const LogoutIcon = styled(ExitToAppIcon)`
  font-size: 35px !important;
  color: white;
  transition: transform 0.1s !important;

  &:hover {
    color: var(--color-secundary);
    cursor: pointer;
    transform: scale(1.1);
  }
`
