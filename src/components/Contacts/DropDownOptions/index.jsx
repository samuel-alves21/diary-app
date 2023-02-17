import styled from 'styled-components'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/userContext'
import { arraySort } from '../../../utils/arraySort'

export const DropDownOptions = ({ sets }) => {
  const { dropDownToggle, setDropDownToggle, sort } = sets
  const {
    filteredContacts: { content, hasChanged },
    setFinteredContacts,
  } = sort
  const {
    userState: { contacts },
  } = useContext(UserContext)

  const handleClick = (e) => {
    if (e.target.innerText === 'name') {
      const sortedArray = arraySort(content, hasChanged)

      setFinteredContacts({
        content: [...sortedArray],
        hasChanged: !hasChanged,
      })
    } else {
      setFinteredContacts({
        content: [...contacts],
        hasChanged: !hasChanged,
      })
    }
    setDropDownToggle(!dropDownToggle)
  }

  return (
    <DropDownOptionsContainer
      className='options-container'
      on={dropDownToggle}
    >
      <Options onClick={(e) => handleClick(e)}>name</Options>
      <Options onClick={(e) => handleClick(e)}>reset</Options>
    </DropDownOptionsContainer>
  )
}

const DropDownOptionsContainer = styled.div`
  z-index: ${(props) => (props.on ? '0' : '2')};
  position: ${(props) => (props.on ? 'relative' : 'absolute')};
  width: 100%;

  transform: ${(props) => (props.on ? 'scaley(1)' : 'scaley(0)')};
  transform-origin: top;

  background-color: var(--color-secundary);
  border-radius: 0 0 6px 6px;

  font-weight: 400;
  font-size: 0.93rem;

  transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

  & > *:not(:last-child) {
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
