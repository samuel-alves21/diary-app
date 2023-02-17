export const telFormatter = (tel) => {
  let formatString = tel.trim().replace(' ', '')

  if (formatString.length === 11) {
    formatString = `(${formatString.slice(0, 2)}) ${formatString.slice(
      2,
      7
    )}-${formatString.slice(7, 11)}`
  }

  return formatString
}
