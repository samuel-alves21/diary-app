import styled from "styled-components"
import { DeveloperInfo } from "./DeveloperInfo"
import { IconsInfo } from "./IconsInfo"

export const Footer = () => {
  return (
    <FooterContainer>
      <DeveloperInfo />
      <IconsInfo />
    </FooterContainer>
  )
}

export const FooterContainer = styled.footer`
  margin-top: auto;
  height: 55px;
  background-color: var(--color-primary);

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0 20px;

  @media screen and (max-width: 700px) {
    justify-content: space-evenly;
    flex-direction: column;
    height: 100px;   
    padding: 20px 0;

    & .p-footer {
      font-size: calc(1vw + 0.65rem) !important;
    }
    & .p-github {
      font-size: calc(1vw + 1rem) !important;
    }
    & .p-instagram {
      font-size: calc(1vw + 1.1rem) !important;
    }
  }
` 