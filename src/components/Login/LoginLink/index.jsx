import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LoginLink = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);
  position: relative;

  & :visited {
    text-decoration: none;
    color: var(--color-primary);
  }

  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-primary);
    width: 100%;
    height: 1.3px;
    top: 100%;
    left: 0;
    transform: scale(0);
    animation: width-animation-reverse 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
      forwards;
  }

  &:hover {
    cursor: pointer;

    &::after {
      animation: width-animation 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
        forwards;
    }
  }

  @keyframes width-animation {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes width-animation-reverse {
    100% {
      transform: scale(0);
    }
    0% {
      transform: scale(1);
    }
  }
`
