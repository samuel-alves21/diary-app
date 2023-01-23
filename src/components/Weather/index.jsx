import styled from "styled-components"

import weather from "../../img/weather.png"

export const Weather = () => {
  return (
    <WeatherContainer className="WeatherIconContainer">
      <WeatherIcon className="WeatherIcon" src={weather} alt="weather icon"/>
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