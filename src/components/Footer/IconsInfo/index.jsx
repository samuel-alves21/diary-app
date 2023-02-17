import styled from 'styled-components'

export const IconsInfo = () => {
  return (
    <InfoP className='p-footer'>
      All icons available for free on
      <Link
        href='https://www.flaticon.com/br/'
        target='_blank'
      >
        <InfoSpan className='p-footer'> Flaticon</InfoSpan>
      </Link>{' '}
      and
      <Link
        href='https://v4.mui.com/pt/'
        target='_blank'
      >
        <InfoSpan className='p-footer'> Material-UI</InfoSpan>
      </Link>
    </InfoP>
  )
}

const InfoP = styled.p`
  font-weight: lighter;
`

const InfoSpan = styled.span`
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-color: white;
    width: 100%;
    height: 1px;
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

const Link = styled.a`
  text-decoration: none;

  &:visited {
    color: white;
  }
`
