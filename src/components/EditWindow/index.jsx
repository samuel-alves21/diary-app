import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close';
import { useContext } from "react";
import { EditToggleContext } from "../../contexts/editContext";

export const EditWindow = () => {
  const { editToggle, setEditToggle } = useContext(EditToggleContext)

  return (
    <EditWindowContainer className="edit-window-container" on={editToggle}>
      <EditField className="edit-field">
        <IconCircle className="circle" onClick={() => setEditToggle(!editToggle)}>
          <OutIcon />
        </IconCircle>
        <H2>Hello...</H2>
      </EditField>
    </EditWindowContainer>
  )
}

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
  width: 50vw;
  height: 50vh;
  background-color: rgba(90, 90, 223, 0.281);
  border-radius: 10px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: var(--color-secundary);
  border-radius: 50px;
  position: absolute;
  top: -25px;
`

const H2 = styled.h2`
  margin: auto 0;
`

const OutIcon = styled(CloseIcon)`
  color: white !important;
`