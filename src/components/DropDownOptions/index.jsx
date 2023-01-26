import { useContext } from "react"
import styled from "styled-components"
import { ContactsContext } from "../../contexts/contactsContext"
import { DropDownContext } from "../../contexts/dropDownContext"

const handleClick = (e, on, setOn, contactsDispatch) => {
  console.log(e.target.innerText)
  contactsDispatch({ types: e.target.innerText})
  setOn(!on)
}

export const DropDownOptions = () => {
  const { on, setOn } = useContext(DropDownContext)
  const { contactsDispatch } = useContext(ContactsContext)

  return (
    <DropDownOptionsContainer className="options-container" on={on}>
      <Options 
      onClick={(e) =>handleClick(e, on, setOn, contactsDispatch)}>
        name
      </Options>
      <Options 
      onClick={(e) =>handleClick(e, on, setOn, contactsDispatch)}>
        date
      </Options>
      <Options 
      onClick={(e) =>handleClick(e, on, setOn, contactsDispatch)}>
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


