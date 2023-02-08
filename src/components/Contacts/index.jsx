import styled from "styled-components"
import { DropDown } from "./DropDown"
import { ContactData } from "./ContactData"
import { useFilter } from "../../hooks/useFilter"

export const Contacts = () => {
  const [contacts] = useFilter()

  return (
    <ContactsContainer className="contacts-container">
      { contacts === undefined ? 
        <p>Voce ainda não possui contatos</p>
        :     
        <> 
          { !!contacts.length && <DropDown /> }
          { contacts.length ?
          contacts.map((contact, index) => {
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
