import styled from "styled-components"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Button = () => {
  return  <StyledButton className="sort-button"> ordenar por <ExpandMoreIcon /></StyledButton>
}

const StyledButton = styled.button`
  align-self: end;

  display: flex;
  align-items: center;

  padding: 7px 20px;
  margin-bottom: 20px;

  background-color: transparent;
  color: var(--color-primary);

  border: 2px solid var(--color-primary);
  border-radius: 6px;

  font-weight: 500;

  transition: backgound-color 0.1s;
  transition: border 0.1s;
  transition: color 0.1s;

  &:hover {
    cursor: pointer;
    color: white;
    border:2px solid white;
    background-color: var(--color-primary); 
  }
`