import styled from "styled-components"
import { useContext } from "react"
import { UserContext } from "../../../contexts/userContext"

const handleClick = (e, dropDownToggle, setDropDownToggle, UserDispatch) => {
  UserDispatch({ types: 'sort'})
  setDropDownToggle(!dropDownToggle)
}

export const DropDownOptions = ({ sets: {dropDownToggle, setDropDownToggle} }) => {
  const { userDispatch } = useContext(UserContext)

  return (
    <DropDownOptionsContainer className="options-container" on={dropDownToggle}>
      <Options 
      onClick={(e) =>handleClick(e, dropDownToggle, setDropDownToggle, userDispatch)}>
        name
      </Options>
      <Options 
      onClick={(e) =>handleClick(e, dropDownToggle, setDropDownToggle, userDispatch)}>
        date
      </Options>
      <Options 
      onClick={(e) =>handleClick(e, dropDownToggle, setDropDownToggle, userDispatch)}>
        reset
      </Options>
    </DropDownOptionsContainer>
  )
}

const DropDownOptionsContainer = styled.div`
  z-index: ${props => props.on ? '0' : '2'};
  position: ${props => props.on ? 'relative' : 'absolute'};
  width: 100%;

  transform: ${props => props.on ? 'scaley(1)' : 'scaley(0)'};
  transform-origin: top;

  background-color: var(--color-secundary);
  border-radius: 0 0 6px 6px;

  font-weight: 400;
  font-size: 0.93rem;

  transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

  & > *:not(:last-child){
    padding-top: 5px;
  }

  & :last-child {
    padding: 5px 0;

    &:hover {
      border-radius: 0 0 6px 6px;
    }
  }
`

const Options = styled.p`
  text-align: center;
  color: white;

  &:hover {
    background-color: var(--color-secundary-dark);
    cursor: pointer;
  }
`


