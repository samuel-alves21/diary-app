import React from "react";
import styled from "styled-components";
import { ContactIcons } from "../ContactIcons";

export const ContactData = React.memo( function ContactData({ contact }) {
  return (
    <Contact className="contact" id={contact.id}>
      <Line className="line" />
      <Contactcontainer className="contact-container">
        <Name className="name">
          {contact.name}
        </Name>
        <Email className="email">
          {contact.email}
        </Email>
        <Tel className="tel">
          {contact.tel}
        </Tel>
        <ContactIcons data={{ 
          name: contact.name, email :contact.email, tel :contact.tel, id: contact.id
        }}/>
      </Contactcontainer>
    </Contact>
  )
})

const Contact = styled.div`
  &:hover {
    background-color: var(--color-secundary-light);
  }
`

const Contactcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 370px) {
    gap: 10px
  }
`

const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--color-secundary);
`

const Name = styled.p`
  font-size: 1rem;
  width: 25%;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: calc(0.6vw + 0.49rem);
  }
`

const Tel = styled(Name)``

const Email = styled(Name)`
  width: 50%;
`
