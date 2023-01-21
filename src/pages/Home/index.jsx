import styled from "styled-components"

export const Home = () => {
  return (
    <section className="contats">
      <Contacts className="contat">
        <ContactInfo>Samuel Alves Theodoro</ContactInfo>
        <ContactInfo>samueltheodoro21@gmail.com</ContactInfo>
        <ContactInfo>(31) 97112-2156</ContactInfo>
      </Contacts>
      <Contacts className="contat">
        <ContactInfo>Ludmila Alves Theodoro</ContactInfo>
        <ContactInfo>ludmila21@gmail.com</ContactInfo>
        <ContactInfo>(31) 78211-34814</ContactInfo>
      </Contacts>
      <Contacts className="contat">
        <ContactInfo>Antonio Guedes Theodoro</ContactInfo>
        <ContactInfo>antonio21@gmail.com</ContactInfo>
        <ContactInfo>(31) 92348-2471</ContactInfo>
      </Contacts>
    </section>
  )
}

const Contacts = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const ContactInfo = styled.p`
  color: var( --color-primary);
`
