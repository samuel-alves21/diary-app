import styled from "styled-components"

import logout from "../../img/logout.png"

export const Logout = () => {
  return (
    <LogoutContainer className="logout-container">
      <LogoutIcon className="logout" src={logout} alt="logout icon" />
    </LogoutContainer>
  )
}

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
`

const LogoutIcon = styled.img`
  width: 100%;
  object-fit: contain;
`