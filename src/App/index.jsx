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
    font-size: 62,5%
  }

  :root {
    --color-primary: rgb(54, 54, 212);

    --color-secundary: rgb(111, 111, 224);
    --color-secundary-dark: rgb(90, 90, 223);

    --font-standard: 'roboto'
  }
`

export default App
