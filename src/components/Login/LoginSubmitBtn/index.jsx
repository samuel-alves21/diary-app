import styled from "styled-components"
import { useContext } from "react"
import { Btn } from "../../EditWindow/EditSubmitBtn"
import { InputErrorMsgContext } from "../../../contexts/InputErrorMsgContext"
import { userRegister } from "../../../functions/userRegister"
import { userSignIn } from "../../../functions/userSignIn"
import { LoadingContext } from "../../../contexts/loadingContext"

const handleClick = (e, name, email, password, setError, error, setLoading, action) => {
  e.preventDefault()
  
  setLoading(true)
  
  if (action === 'register') {
    userRegister(name, email, password, setError, error, setLoading)
  } else {
    userSignIn(email, password, setError, error, setLoading)
  }
}

export const LoginSubmitBtn = ({ name, email, password, action }) => {
  const { error, setError } = useContext(InputErrorMsgContext)
  const { setLoading } = useContext(LoadingContext)

  return (
    <Button 
    onClick={(e) => handleClick(e, name, email, password, setError, error, setLoading, action)}>
      Submit
    </Button>
  )
}

const Button = styled(Btn)`
  margin-top: 30px;
`
