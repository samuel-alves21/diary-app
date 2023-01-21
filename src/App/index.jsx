import { createGlobalStyle } from "styled-components"

import { Home } from "../pages/Home"

const App = () => {
  return (
    <div className="App">
      <GeneralStyle />
      <Home />
    </div>
  )
}

const GeneralStyle =createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-primary: blue;
  }
`

export default App
