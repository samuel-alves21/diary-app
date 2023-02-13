import styled from "styled-components"

export const Weather = ({ weatherIcon }) => {
  return (
    <WeatherContainer className="WeatherIconContainer">
      <WeatherIcon className="WeatherIcon" src={weatherIcon} alt="weather icon"/>
    </WeatherContainer>
  )
}

const WeatherContainer = styled.div`
  width: 44px;
`

const WeatherIcon = styled.img`
  object-fit: contain;
  width: 100%;
`