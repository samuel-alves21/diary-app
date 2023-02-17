import { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/userContext'
import { getCurrentHour } from '../../utils/getCurrentHour'
import { Weather } from './Weather'

export const UserMessage = () => {
  const {
    userState: { userName },
  } = useContext(UserContext)
  const { weatherIcon, phrase } = getCurrentHour()

  return (
    <MessageContainer className='message-container'>
      <MessageTitle className='message-title'>
        {phrase} {userName}!
      </MessageTitle>
      <Weather weatherIcon={weatherIcon} />
    </MessageContainer>
  )
}

const MessageTitle = styled.h2`
  color: var(--color-primary);
  font-size: 1.8rem;
  margin-right: 20px;
`

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  padding-top: 50px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;

    & .WeatherIconContainer {
      margin-top: 10px;
    }

    ${MessageTitle} {
      margin-right: 0;
    }
  }
`
