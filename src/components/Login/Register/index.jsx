import styled from 'styled-components'
import { useState } from 'react'
import { LoginInputField } from '../LoginInputField'
import { LoginSubmitBtn } from '../LoginSubmitBtn'
import { LoginForm } from '../LoginForm'
import { LoginLink } from '../LoginLink'
import { ErrorMsg } from '../../ErrorMsg'
import { InputErrorMsgContext } from '../../../contexts/InputErrorMsgContext'
import { useContext } from 'react'
import { useEffect } from 'react'

export const Register = () => {
  const { setError } = useContext(InputErrorMsgContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setError({ hasError: false, errorMsg: '' })
  }, [setError])

  return (
    <LoginForm className='input-container'>
      <H2>Register</H2>

      <LoginInputField
        labelId='name'
        labelValue='user name:'
        inputType='text'
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      <LoginInputField
        labelId='email'
        labelValue='email:'
        inputType='text'
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      <LoginInputField
        labelId='password'
        labelValue='password:'
        inputType='password'
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      <ErrorMsg />

      <LoginSubmitBtn
        name={name}
        email={email}
        password={password}
        action='register'
      />
      <RegisterMessege>
        Or <LoginLink to='/sign-in'>sign in</LoginLink> if you already have an
        account
      </RegisterMessege>
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
