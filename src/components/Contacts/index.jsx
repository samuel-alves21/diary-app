import styled from "styled-components"
import { useRef } from "react"
import { useContext, useEffect } from "react"
import { ContactsContext } from "../../contexts/contactsContext"
import { SearchContext } from "../../contexts/searchContext"
import { DropDown } from "../DropDown"


export const Contacts = () => {
  const { contactsState:{ contacts }, contactsDispatch} = useContext(ContactsContext)
  const { searchValue } = useContext(SearchContext)

  const ref = useRef(contacts)

  useEffect(() => {
    const temp = []
    ref.current.forEach((contact) => {
      if (contact.name.toLowerCase().includes(searchValue)) {
        temp.push(contact)
      }
    })
    contactsDispatch({ types: 'set', payload: temp })
  }, [searchValue, contactsDispatch, ])

  return (
    <ContactsContainer className="contacts-container">
      <DropDown notFound={contacts.length ? true : false}/>
      { contacts.length ?
        contacts.map((contact, index) => {
          return (
          <div className="contact" key={index}>
            <Line className="line" />
            <Contactcontainer className="contact-container">
              <Name className="name">{contact.name}</Name>
              <Email className="email">{contact.email}</Email>
              <Tel className="tel">{contact.tel}</Tel>
            </Contactcontainer>
          </div> 
        )}) :
        <NothingFound>Seens like I could'n find anything -(</NothingFound> }
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
    font-size: calc(0.6vw + 0.48rem);
  }
`

const Tel = styled(Name)`
`

const Email = styled(Name)`
  width: 50%;
`

const NothingFound = styled.h3 `
  text-align: center;
  color: var(--color-primary);
`
