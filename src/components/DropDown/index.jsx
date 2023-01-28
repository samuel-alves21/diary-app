import { useState } from "react"
import styled from "styled-components"

import { Button } from "../Button"
import { DropDownOptions } from "../DropDownOptions"

export const DropDown = ({ notFound }) => {
  const [ dropDownToggle, setDropDownToggle ] = useState(false)

  return (
    <DropDownContainer>
      {notFound && <Button sets={{ dropDownToggle, setDropDownToggle }}/>}
      <DropDownOptions sets={{ dropDownToggle, setDropDownToggle }}/>
    </DropDownContainer>
  )
}

const DropDownContainer = styled.div`
  align-self: end;
  position: relative;

  margin-bottom: 20px;
`