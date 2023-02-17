import styled from 'styled-components'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/userContext'
import { createContacts } from '../../../firebase/data/createContacts'
import { updateContacts } from '../../../firebase/data/updateContacts'
import { contactsValidator } from '../../../utils/contactsValidator'
import { InputErrorMsgContext } from '../../../contexts/InputErrorMsgContext'

export const EditSubmitBtn = ({
  inputContext: { inputValue, setInputValue },
}) => {
  const {
    userState: { user },
  } = useContext(UserContext)
  const { setError } = useContext(InputErrorMsgContext)

  const handleClick = (e) => {
    e.preventDefault()

    if (inputValue.action.type === 'Add') {
      const { isCorrect, errorMessenge } = contactsValidator(inputValue)
      if (isCorrect) {
        setError({ hasError: false, errorMsg: '' })
        createContacts(user, inputValue)
        setInputValue({ name: '', email: '', tel: '', action: { type: 'Add' } })
      } else {
        setError({ hasError: true, errorMsg: errorMessenge })
      }
    }

    if (inputValue.action.type === 'Edit') {
      const { isCorrect, errorMessenge } = contactsValidator(inputValue)
      if (isCorrect) {
        setError({ hasError: false, errorMsg: '' })
        updateContacts(user, inputValue)
      } else {
        setError({ hasError: true, errorMsg: errorMessenge })
      }
    }
  }

  return <Btn onClick={(e) => handleClick(e)}>save</Btn>
}

export const Btn = styled.button`
  margin-top: 10px;

  width: 80%;
  padding: 5px 0;

  color: var(--color-primary);
  font-weight: 500;
  font-size: 1rem;

  background-color: transparent;
  border: 2px solid var(--color-primary);

  transition: backgound-color 0.2s;
  transition: border-radius 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: var(--color-primary);
    color: white;
  }
`
