import styled from 'styled-components'
import { useRef, useContext } from 'react'
import { SearchContext } from '../../../contexts/searchContext'
import { TextCleaner, SerachIconContainer } from '../TextCleaner'

export const SearchField = () => {
  const input = useRef()

  const { setSearchValue } = useContext(SearchContext)

  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  return (
    <SearchFieldContainer className='search-field-container'>
      <Input
        ref={input}
        placeholder='type to filter by name...'
        onChange={(e) => handleChange(e)}
      />
      <TextCleaner input={input} />
    </SearchFieldContainer>
  )
}

const SearchFieldContainer = styled.div`
  display: flex;
  flex-grow: 1;

  margin: 0 calc(10px + 2vw);
  max-width: 700px;
`

const Input = styled.input`
  flex-grow: 1;

  height: 30px;
  padding: 0 10px;

  font-size: 1rem;

  border: none;
  outline: none;

  transition: border-radius 0.5s;
  &:focus {
    border-radius: 10px 0 0 10px;

    + ${SerachIconContainer} {
      border-radius: 0 10px 10px 0;
    }
  }
`
