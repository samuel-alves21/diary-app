import styled from 'styled-components'
import { useContext } from 'react'
import { InputsContext } from '../../../contexts/inputsContext'
import { EditSubmitBtn } from '../EditSubmitBtn'
import { ErrorMsg } from '../../ErrorMsg'

export const EditInputs = () => {
  const { inputValue, setInputValue } = useContext(InputsContext)

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setInputValue({ ...inputValue, name: e.target.value })
    }
    if (e.target.id === 'email') {
      setInputValue({ ...inputValue, email: e.target.value })
    }
    if (e.target.id === 'tel') {
      setInputValue({ ...inputValue, tel: e.target.value })
    }
  }

  return (
    <InputsContainer className='input-container'>
      <InputContainer>
        <Label htmlFor='name'>name:</Label>
        <Input
          type='text'
          autoComplete='off'
          onChange={(e) => handleChange(e)}
          id='name'
          placeholder='contact name'
          value={inputValue.name}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='email'>email:</Label>
        <Input
          type='text'
          autoComplete='off'
          onChange={(e) => handleChange(e)}
          id='email'
          placeholder='contact email'
          value={inputValue.email}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='tel'>tel:</Label>
        <Input
          type='text'
          autoComplete='off'
          onChange={(e) => handleChange(e)}
          id='tel'
          placeholder='xx xxxxx-xxxx'
          value={inputValue.tel}
        />
      </InputContainer>
      <ErrorMsg />
      <EditSubmitBtn inputContext={{ inputValue, setInputValue }} />
    </InputsContainer>
  )
}

const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  margin-bottom: 20px;
`

export const Input = styled.input`
  width: 100%;
  padding: 6px 8px;

  border: 1.5px solid white;
  outline: none;

  transition: border-radius 0.05s;

  &:focus {
    border-radius: 10px;
  }
`

export const Label = styled.label`
  color: white;

  font-weight: ligther;
  font-size: 0.95rem;

  align-self: flex-start;
  margin-bottom: 4px;

  &:hover {
    cursor: pointer;
  }
`
