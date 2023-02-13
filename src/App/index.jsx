import { createGlobalStyle } from "styled-components"
import { UserContext } from "../contexts/userContext"
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { useContext } from "react"

import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { SignInPage } from "../pages/SingInPage"
import { Loader } from "../components/Loader"

import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../firebase/firebaseConfig"
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database"
import { useAuth } from "../hooks/useAuth"

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app)

const App = () => {
  const { userState, userDispatch } = useContext(UserContext)
  useAuth(userDispatch)

  return (
    <div className="App">
      <GeneralStyle />
      { userState.user === '' ? 
      <Loader />
      :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/sign-in" element={<SignInPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
      </BrowserRouter> }
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

    font-size: 62,5%;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --color-primary: rgb(54, 54, 212);

    --color-secundary: rgb(111, 111, 224);
    --color-secundary-dark: rgb(90, 90, 223);
  }
`

export default App
