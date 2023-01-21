import styled from "styled-components"

import logout from "../../img/logout.png"

export const Logout = () => {
  return (
    <LogoutContainer >
      <LogoutIcon  src={logout} alt="logout icon" />
    </LogoutContainer>
  )
}

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35px
`

const LogoutIcon = styled.img`
  width: 100%;
  object-fit: contain;
`