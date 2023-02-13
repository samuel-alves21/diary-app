import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import styled from 'styled-components';
import { useContext, useCallback } from 'react';
import { EditToggleContext } from '../../../contexts/editContext';
import { InputsContext } from '../../../contexts/inputsContext';
import { UserContext } from '../../../contexts/userContext';
import { deletecontacts } from '../../../firebase/data/deleteContacts';

export const ContactIcons = ({ data }) => {
  const { setEditToggle } = useContext(EditToggleContext)
  const { setInputValue } = useContext(InputsContext)
  const { userState: { user } } = useContext(UserContext)

  const handleClick = useCallback((e) => {
    const { name, email, tel, id } = data

    if (e.target.id === 'edit') {
      setEditToggle((editToggle) => !editToggle)
      setInputValue((inputValue) => {
        return  {...inputValue, name, email, tel, action: {type: 'Edit', id}}
      })
    } else {
      setInputValue((inputValue) => {
        inputValue = {...inputValue, name, email, tel}
        deletecontacts(id, user)
        return inputValue
      })
    }
  }, [data, setEditToggle, setInputValue, user])
  
  return (
    <IconWrapper>
      <Edit id='edit' onClick={(e) => handleClick(e)}/>
      <Delete id='delete' onClick={(e) => handleClick(e)}/>
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