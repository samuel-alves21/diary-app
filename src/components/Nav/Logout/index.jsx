import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { auth } from '../../../App';

const handleClick = (navigate) => {
  auth.signOut()
  .then(() => navigate('/sign-in'))
  .catch((e) => console.log(e))
}

export const Logout = () => {
  const navigate = useNavigate()

  return ( 
  <LogoutIcon className='logout' onClick={() => handleClick(navigate)}/>
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