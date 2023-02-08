import styled from "styled-components"
import { useState } from "react"
import { LoginInputField } from "../LoginInputField"
import { LoginSubmitBtn } from "../LoginSubmitBtn"
import { LoginErrorMsg } from "../LoginErrorMsg"
import { LoginForm } from "../LoginForm"
import { LoginLink } from "../LoginLink"


export const SingIn = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <LoginForm className="input-container">
      <H2>Sign in</H2>
      
      <LoginInputField 
      labelId='email' 
      labelValue='email:' 
      inputType='text' 
      setEmail={setEmail} 
      setPassword={setPassword}/>

      <LoginInputField 
      labelId='password' 
      labelValue='password:' 
      inputType='password' 
      setEmail={setEmail} 
      setPassword={setPassword}/>

      <LoginErrorMsg />

      <LoginSubmitBtn 
      email={email} 
      password={password}
      action='signIn'
      />
      
      <RegisterMessege>Or <LoginLink to='/register'>register</LoginLink> to create an account</RegisterMessege>
    </LoginForm>
  )
}

const H2 = styled.h2`
  color: white;
  padding-bottom: 30px;
`

const RegisterMessege = styled.p`
  margin-top: 20px;
  color: white;
  width: 70%;
  text-align: center;
`