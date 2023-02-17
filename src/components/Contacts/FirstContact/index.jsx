import styled from 'styled-components'
import { useContext } from 'react'
import { EditToggleContext } from '../../../contexts/editToggleContext'
import { InputsContext } from '../../../contexts/inputsContext'
import { StyledButton } from '../SortButton'

export const FirstContact = () => {
  const { editToggle, setEditToggle } = useContext(EditToggleContext)
  const { inputValue, setInputValue } = useContext(InputsContext)

  const handleClick = () => {
    setEditToggle(!editToggle)
    setInputValue({
      ...inputValue,
      name: '',
      email: '',
      tel: '',
      action: { type: 'Add' },
    })
  }

  return (
    <FirstContactContainer>
      <P>Voce ainda não possui contatos</P>
      <AddFirstContactButton onClick={handleClick}>
        add contact
      </AddFirstContactButton>
    </FirstContactContainer>
  )
}

const FirstContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AddFirstContactButton = styled(StyledButton)`
  width: 120px;
`

const P = styled.p`
  margin-bottom: 10px;
`
