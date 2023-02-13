export const registerValidator = (name, email, password) => {
  const regexEmail = /\S+@\S+\.\S+/

  if (name.length < 4 ) {
    return {
      isCorrect: false,
      errorMessenge: 'user-name should have at least 4 characters!'
    }
  }
  if (!regexEmail.test(email)) {
    return {
      isCorrect: false,
      errorMessenge: 'e-mail invalid!'
    }
  }
  if (password.length < 6 ) {
    return {
      isCorrect: false,
      errorMessenge: 'password should have at least 6 characters!'
    }
  }

  return {
    isCorrect: true,
    errorMessenge: ''
  }
}