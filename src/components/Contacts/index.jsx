import { useContext } from "react"
import styled from "styled-components"

import { ContactsContext } from "../../contexts/contactsContext"
import { Button } from "../Button"

export const Contacts = () => {
  const { contactsState:{ contacts } } = useContext(ContactsContext)

  console.log(contacts)
  
  return (
    <ContactsContainer className="contacts-container">
      <Button />
      {contacts.map((contact, index) => (
        <>
        <Line className="line" />
        <Contactcontainer className="contact-container">
          <Name className="name">{contact.name}</Name>
          <Email className="email">{contact.email}</Email>
          <Tel className="tel">{contact.tel}</Tel>
        </Contactcontainer>
        </>
      ))}
    </ContactsContainer>
  )
}

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  align-self: center;

  @media screen and (max-width: 900px) {
    width: 85vw;
  }
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
  @media screen and (max-width: 700px) {
    width: 95vw;
  }
`

const Contactcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`

const Line = styled.span`
  width: 100%;
  height: 3px;
  background-color: var(--color-secundary);
`
const Name = styled.p`
  font-size: 1rem;
  width: 25%;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: calc(0.6vw + 0.48rem);
  }
`

const Tel = styled(Name)`
`

const Email = styled(Name)`
  width: 50%
`
