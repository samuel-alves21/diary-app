import styled from "styled-components"
import { IconCircle } from "../../EditWindow/CloseButton"
import { Btn } from "../../EditWindow/EditSubmitBtn"
import DoneIcon from '@material-ui/icons/Done';

export const RedirectingMsg = ({ setShouldRedirect }) => {
  return (
    <RedirectingMsgContainer>
      <Content>
        <CheckIcon>
          <Icon />
        </CheckIcon>
        <P>Your account has been created. You will be redirected to the home</P>
        <Button onClick={() => setShouldRedirect(true)}>Ok</Button>
      </Content>
    </RedirectingMsgContainer>
  )
}

const RedirectingMsgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: var(--color-secundary);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;

  width: 60%;
  height: 30%;
  min-width: 300px;
  max-width: 500px;
  padding: 0 50px;

  text-align: center;
`


const Button = styled(Btn)`
  margin-top: calc(0.5vw + 30px);
`

const P = styled.p`
  color: white;
  line-height: 25px;
`

const CheckIcon = styled(IconCircle)`
  background-color: var(--color-secundary-dark)
`

const Icon = styled(DoneIcon)`
  color: white !important;
`