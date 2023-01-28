import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useContext } from 'react';
import styled from 'styled-components';
import { EditToggleContext } from '../../contexts/editContext';

export const ContactIcons = ({ data: { name, email, tel } }) => {
  const { editToggle, setEditToggle } = useContext(EditToggleContext)

  const handleClick = (e, name, email, tel) => {
    setEditToggle(!editToggle)
    console.log(editToggle)
    console.log(name, email, tel)
  }
  
  return (
    <IconWrapper>
      <Edit onClick={(e) => handleClick(e, name, email, tel)}/>
      <Delete />
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: flex;
`

const Edit = styled(EditOutlinedIcon)`
  color: var(--color-primary) !important;
  font-size: 1.5rem !important;

  &:hover{
    cursor: pointer;
    color: var(--color-secundary);
    transform: scale(1.1);
  }

    @media screen and (max-width: 900px) {
    font-size: calc(0.6vw + 1rem) !important;
  }
`
const Delete = styled(DeleteOutlineOutlinedIcon)`
  color: var(--color-primary) !important;
  font-size: 1.5rem !important;

  &:hover{
    cursor: pointer;
    color: var(--color-secundary);
    transform: scale(1.1);
  }

    @media screen and (max-width: 900px) {
    font-size: calc(0.6vw + 1rem) !important;
  }
`