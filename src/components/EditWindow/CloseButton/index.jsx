import { useContext } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import { EditToggleContext } from '../../../contexts/editToggleContext'
import { InputErrorMsgContext } from '../../../contexts/InputErrorMsgContext'

export const CloseButton = () => {
  const { editToggle, setEditToggle } = useContext(EditToggleContext)
  const { setError } = useContext(InputErrorMsgContext)

  const handleClick = () => {
    setEditToggle(!editToggle)
    setError({ hasError: false, errorMsg: '' })
  }

  return (
    <IconCircle
      className='circle'
      onClick={handleClick}
    >
      <OutIcon />
    </IconCircle>
  )
}

export const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  top: -25px;

  background-color: var(--color-secundary);
  border-radius: 50px;
  position: absolute;

  &:hover {
    cursor: pointer;
  }
`

const OutIcon = styled(CloseIcon)`
  color: white !important;
`
