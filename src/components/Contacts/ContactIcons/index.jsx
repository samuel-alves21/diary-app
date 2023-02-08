import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import styled from 'styled-components';
import { useContext } from 'react';
import { EditToggleContext } from '../../../contexts/editContext';
import { InputsContext } from '../../../contexts/inputsContext';

export const ContactIcons = ({ data: { name, email, tel } }) => {
  const { editToggle, setEditToggle } = useContext(EditToggleContext)
  const { setInputValue } = useContext(InputsContext)

  const handleClick = (name, email, tel, setInputValue) => {
    setEditToggle(!editToggle)
    setInputValue({ name, email, tel, action: 'Edit' })
  }
  
  return (
    <IconWrapper>
      <Edit onClick={() => handleClick(name, email, tel, setInputValue)}/>
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