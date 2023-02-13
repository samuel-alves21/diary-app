import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import { useContext } from "react";
import { EditToggleContext } from "../../../contexts/editContext";
import { InputsContext } from "../../../contexts/inputsContext";

export const AddButton = () => {
  const { editToggle, setEditToggle } = useContext(EditToggleContext)
  const { inputValue, setInputValue } = useContext(InputsContext)

  const handleClick = () => {
    setEditToggle(!editToggle)
    setInputValue({
      ...inputValue, name: '', email: '', tel: '', action: { type: 'Add' }
    })
  }

  return <StyledAddIcon onClick={handleClick}/>
}

const StyledAddIcon = styled(AddIcon)`
  color: var(--color-primary);
  width: 100%;
  font-size: 1.85rem !important;
  margin: 5px 5px 0 0;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`
