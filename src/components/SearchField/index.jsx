import styled from "styled-components"
import { Search } from "../Search"

export const SearchField = () => {
  return (
    <SearchFieldContainer>
      <Input placeholder="type to search by name..."/>
      <Search />
    </SearchFieldContainer>
  )
}

const SearchFieldContainer = styled.div`
  display: flex;
  flex-grow: 1;

  margin: 0 50px;
  max-width: 700px;
`

const Input = styled.input`
  flex-grow: 1;

  height: 30px;
  padding: 0 5px;

  font-size: 1rem;

  border: none;
  outline: none;
`

