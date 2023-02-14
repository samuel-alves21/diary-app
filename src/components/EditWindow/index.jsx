import styled from "styled-components"
import { useContext } from "react";
import { EditToggleContext } from "../../contexts/editToggleContext";
import { EditInputs } from "./EditInputs";
import { InputsContext } from "../../contexts/inputsContext";
import { CloseButton } from "./CloseButton";

export const EditWindow = () => {
  const { editToggle } = useContext(EditToggleContext)
  const { inputValue: {action : {type}} } = useContext(InputsContext)

  return (
    <EditWindowContainer className="edit-window-container" on={editToggle}>
      <EditField className="edit-field">
        <AcitionP>{type}</AcitionP>
        <EditInputs />
        <CloseButton />
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
