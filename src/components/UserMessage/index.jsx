import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../contexts/userContext"
import { Weather } from "./Weather"

export const UserMessage = () => {
  const { userState: { userName }} = useContext(UserContext)

  return (
    <MessageContainer className="message-container">
      <MessageTitle className="message-title">Good night {userName}!</MessageTitle>
      <Weather />
    </MessageContainer>
  )
}

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`

const MessageTitle = styled.h2`
  color: var(--color-primary);
  font-size: 2rem;
  margin-right: 20px;
`
