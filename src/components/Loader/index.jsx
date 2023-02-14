import { TailSpin } from "react-loader-spinner"
import styled from "styled-components"

export const Loader = () => {
  return (
    <DivLoader>
      <TailSpin color='var(--color-primary)' />
    </DivLoader>
  )
}

const DivLoader = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`