import styled from "styled-components"
import { Weather } from "../Weather"

export const UserMessage = () => {
  return (
    <MessageContainer className="message-container">
      <MessageTitle className="message-title">Good night user!</MessageTitle>
      <Weather />
    </MessageContainer>
  )
}

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`

const MessageTitle = styled.h2`
  color: var(--color-primary);
  font-size: 2rem;
  margin-bottom: 20px;
`