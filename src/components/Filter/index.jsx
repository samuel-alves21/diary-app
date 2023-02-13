import { useContext } from "react"
import styled from "styled-components"
import { EditToggleContext } from "../../contexts/editContext"

export const Filter = () => {
  const { editToggle } = useContext(EditToggleContext)

  return (
    <FilterStyled on={editToggle} className='filter'></FilterStyled>
  )
}

const FilterStyled = styled.div`
  display: ${props => props.on ? 'Block' : 'none'};
  background-color: rgba(0, 0, 0, 0.20);
  z-index: 5;

  width: 100%;
  height: 100%;
  position: absolute;
`