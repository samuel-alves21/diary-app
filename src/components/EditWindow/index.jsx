import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close';
import { useContext } from "react";
import { EditToggleContext } from "../../contexts/editContext";
import { EditInputs } from "./EditInputs";
import { InputsContext } from "../../contexts/inputsContext";

export const EditWindow = () => {
  const { editToggle, setEditToggle } = useContext(EditToggleContext)
  const { inputValue } = useContext(InputsContext)

  return (
    <EditWindowContainer className="edit-window-container" on={editToggle}>
      <EditField className="edit-field">
        <AcitionP>{inputValue.action}</AcitionP>
        <IconCircle className="circle" onClick={() => setEditToggle(!editToggle)}>
          <OutIcon />
        </IconCircle>
        <EditInputs />
      </EditField>
    </EditWindowContainer>
  )
}

const AcitionP = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`

const EditWindowContainer = styled.div`
  display: ${props => props.on ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
`

const EditField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80vw;
  min-width: 300px;
  max-width: 500px;
  height: 50vh;

  background-color: rgba(90, 90, 223, 0.644);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  position: relative;
  
`
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