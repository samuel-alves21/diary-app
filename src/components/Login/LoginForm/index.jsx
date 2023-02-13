import styled from "styled-components"

export const LoginForm = ({ children }) => {
  return (
    <Form>{children}</Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  width: 90vw;
  min-width: 300px;
  max-width: 500px;
  padding: 60px 0;
  
  background-color: var(--color-secundary);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
`