import { useContext } from "react"
import styled from "styled-components"
import { InputErrorMsgContext } from "../../../contexts/InputErrorMsgContext"

export const LoginErrorMsg = () => {
  const { error: { hasError, errorMsg } } = useContext(InputErrorMsgContext)

  return (
    <ErrorMsgContainer error={hasError}>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </ErrorMsgContainer>
  )
}

const ErrorMsgContainer = styled.div`
  display: ${props => props.error ? 'inline' : 'none'};
  width: 80%;
  margin-top: 10px;
  
  color: white;
  background-color: #fd6666;
`

const ErrorMsg = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #d40303;
  padding: 5px 0;
`