import { useContext } from "react"
import styled from "styled-components"
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { DeleteToggleContext } from "../../contexts/deleteToggleContext"
import { InputsContext } from "../../contexts/inputsContext";
import { deleteContacts } from "../../firebase/data/deleteContacts";
import { UserContext } from "../../contexts/userContext";

export const DeleteWindow = () => {
  const { deleteToggle, setDeleteToggle } = useContext(DeleteToggleContext)
  const { inputValue: {action : {id}} } = useContext(InputsContext)
  const { userState: { user } } = useContext(UserContext)

  const handleClick = (e) => {
    if (e.target.parentElement.id === 'cancel') {
      setDeleteToggle(!deleteToggle)
    }
    if (e.target.parentElement.id === 'done') {
      setDeleteToggle(!deleteToggle)
      deleteContacts(id, user)
    }
  }

  return (
    <DeleteWindowContainer on={deleteToggle}>
      <MsgContainer >
        <P>Tem certeza Disso?</P>
        <IconsContainer>
          <div id="done">
            <StyledDoneIcon onClick={(e) => handleClick(e)}/>
          </div>
          <div id="cancel">
            <StyledCloseIcon onClick={(e) => handleClick(e)}/>
          </div>
        </IconsContainer>
      </MsgContainer>

    </DeleteWindowContainer>
  )
}

const DeleteWindowContainer = styled.div`
  display: ${props => props.on ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
`

const MsgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80vw;
  max-width: 450px;
  height: 50px;
  padding: 0 10px;

  border-radius: 10px;
  background-color: rgba(90, 90, 223, 0.644);
`
const P = styled.p`
  color: white
`

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledDoneIcon = styled(DoneIcon)`
  color: var(--color-primary) !important;

  &:hover {
    cursor: pointer;
    transform: scale(1.2)
  }
`
const StyledCloseIcon = styled(CloseIcon)`
  color: var(--color-primary) !important;
  margin-left: 8px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2)
  }
`
