import styled from "styled-components"
import { DropDownProvider } from "../../contexts/dropDownContext"
import { Button } from "../Button"
import { DropDownOptions } from "../DropDownOptions"

export const DropDown = () => {
  return (
    <DropDownContainer>
      <DropDownProvider>
        <Button />
        <DropDownOptions />
      </DropDownProvider>
    </DropDownContainer>
  )
}

const DropDownContainer = styled.div`
  align-self: end;
  position: relative;

  margin-bottom: 20px;
`