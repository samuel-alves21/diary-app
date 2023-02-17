import styled from 'styled-components'
import { useState } from 'react'
import { AddButton } from '../AddButton'
import { SortButton } from '../SortButton'
import { DropDownOptions } from '../DropDownOptions'

export const DropDown = ({ sort }) => {
  const [dropDownToggle, setDropDownToggle] = useState(false)

  return (
    <DropDownContainer className='dropdown-container'>
      <AddButton />
      <SortButtonDiv>
        <SortButton sets={{ dropDownToggle, setDropDownToggle }} />
        <DropDownOptions sets={{ dropDownToggle, setDropDownToggle, sort }} />
      </SortButtonDiv>
    </DropDownContainer>
  )
}

const SortButtonDiv = styled.div`
  position: relative;
`

const DropDownContainer = styled.div`
  display: flex;
  align-self: end;

  margin-bottom: 20px;
`
