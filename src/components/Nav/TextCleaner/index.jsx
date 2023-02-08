import styled from "styled-components"
import ClearIcon from '@material-ui/icons/Clear';
import { useContext } from "react";
import { SearchContext } from "../../../contexts/searchContext";

const handleClick = (input, setSearchValue) => {
  setSearchValue('')
  input.current.value = ''
}

export const TextCleaner = ({ input }) => {
  const { setSearchValue } = useContext(SearchContext)

  return (
    <SerachIconContainer className="search-icon-container"
    onClick={() => handleClick(input, setSearchValue)}>
      <SerachIcon />
    </SerachIconContainer>
  )
}

const SerachIcon = styled(ClearIcon)`
  object-fit: contain;
  transition: width 0.04s;
  color: white;
  transform: scale(0.9);
`

export const SerachIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-secundary);
  height: 30px;
  width: 30px;

  transition: backgound-color 0.05s;
  transition: border-radius 0.5s;

  &:hover {
    background-color: var(--color-secundary-dark);
    cursor: pointer;

    ${SerachIcon} {
      transform: scale(1.0) !important;
    }
  }

`