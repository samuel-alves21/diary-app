import styled from "styled-components"

import search from "../../img/search.png"

export const Search = () => {
  return (
    <SerachIconContainer className="search-icon-container">
      <SerachIcon src={search} alt="search icon" className="search-icon"/>
    </SerachIconContainer>
  )
}

const SerachIcon = styled.img`
  object-fit: contain;
  width: 50%;
  transition: width 0.04s;
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
      width: 56%;
    }
  }

`