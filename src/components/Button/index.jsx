import styled from "styled-components"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useContext } from "react";
import { DropDownContext } from "../../contexts/dropDownContext";

export const Button = () => {
  const { on, setOn } = useContext(DropDownContext)

  return  (
    <StyledButton className="sort-button" onClick={() => {setOn(!on)}} on={on}>
      ordenar por <ExpandIcon on={on}/>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;

  padding: 7px 20px;

  background-color: ${props => props.on ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.on ? 'white' : 'var(--color-primary)'};
  border-radius: ${props => props.on ? '6px 6px 0 0' : '6px'};

  border: 2px solid var(--color-primary);

  transition: backgound-color 0.1s;
  transition: border-radius 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: var(--color-primary); 
  }
`
const ExpandIcon = styled(ExpandMoreIcon)`
  transform: ${props => props.on ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.2s !important;
`