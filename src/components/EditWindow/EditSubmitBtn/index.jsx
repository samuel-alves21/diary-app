import styled from "styled-components"

export const EditSubmitBtn = () => {
  return <Btn>save</Btn>
}

export const Btn = styled.button`
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