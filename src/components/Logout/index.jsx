import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';

export const Logout = () => {
  return <LogoutIcon className='logout'/>
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