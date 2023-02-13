import { telFormatter } from "./telFormatter"

export const contactsValidator = (inputValue) => {
  const { name, email, tel } = inputValue

  const regexEmail = /\S+@\S+\.\S+/
  const regexTel =/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/

  if (name === '' || email === '' || tel === '') {
    return {
      isCorrect: false,
      errorMessenge: 'there is an empty field'
    }
  }

  if (!regexEmail.test(email)) {
    return {
      isCorrect: false,
      errorMessenge: 'e-mail format invalid!'
    }
  }

  if (!regexTel.test(telFormatter(tel))) {
    return {
      isCorrect: false,
      errorMessenge: 'tel format invalid!'
    }
  }

  return { isCorrect: true, errorMessenge: '' }
}