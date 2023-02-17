import { useContext } from 'react'
import styled from 'styled-components'
import { InputErrorMsgContext } from '../../contexts/InputErrorMsgContext'

export const ErrorMsg = () => {
  const {
    error: { hasError, errorMsg },
  } = useContext(InputErrorMsgContext)

  return (
    <ErrorMsgContainer error={hasError}>
      <Msg>{errorMsg}</Msg>
    </ErrorMsgContainer>
  )
}

const ErrorMsgContainer = styled.div`
  display: ${(props) => (props.error ? 'inline' : 'none')};
  width: 80%;
  margin-top: 10px;

  color: white;
  background-color: #fd6666;
`

const Msg = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #d40303;
  padding: 5px 0;
`
