import styled from "styled-components"
import { DropDown } from "./DropDown"
import { ContactData } from "./ContactData"
import { useFilter } from "../../hooks/useFilter"
import { FirstContact } from "./FirstContact"
import { useState, useContext } from "react"
import { UserContext } from "../../contexts/userContext"


export const Contacts = () => {
  const [ filteredContacts, setFinteredContacts ] = useState({
    content: [], 
    hasChanged: false
  })
  const { userState: {contacts} } = useContext(UserContext)

  useFilter(setFinteredContacts)

  return (
    <ContactsContainer className="contacts-container">
      { contacts === undefined ? 
        <FirstContact />
        : 
        <>
          { !!filteredContacts.content.length && <DropDown sort={{filteredContacts, setFinteredContacts}}/> }
          { filteredContacts.content.length ?
          filteredContacts.content.map((contact, index) => {
            return <ContactData contact={contact} key={index}/>
          }) 
          :
          <NothingFound>
            Seens like I could'n find anything -(
          </NothingFound> } 
        </> } 
    </ContactsContainer>
  )
}

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  align-self: center;
  margin-bottom: 50px;

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
const NothingFound = styled.h3 `
  text-align: center;
  color: var(--color-primary);
`
