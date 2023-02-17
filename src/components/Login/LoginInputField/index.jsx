import styled from 'styled-components'

const handleChange = (e, setEmail, setPassword, setName) => {
  if (e.target.id === 'email') {
    setEmail(e.target.value)
  }
  if (e.target.id === 'password') {
    setPassword(e.target.value)
  }
  if (e.target.id === 'name') {
    setName(e.target.value)
  }
}

export const LoginInputField = ({
  labelId,
  labelValue,
  inputType,
  setEmail,
  setPassword,
  setName,
}) => {
  return (
    <InputContainer>
      <Label htmlFor={labelId}>{labelValue}</Label>
      <Input
        autoComplete='off'
        type={inputType}
        id={labelId}
        onChange={(e) => handleChange(e, setEmail, setPassword, setName)}
      />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  margin-top: 20px;
`

const Input = styled.input`
  width: 100%;
  padding: 6px 8px;

  border: 1.5px solid white;
  outline: none;

  transition: border-radius 0.05s;

  &:focus {
    border-radius: 10px;
  }
`
const Label = styled.label`
  color: white;

  font-weight: ligther;
  font-size: 0.95rem;

  align-self: flex-start;
  margin-bottom: 4px;

  &:hover {
    cursor: pointer;
  }
`
