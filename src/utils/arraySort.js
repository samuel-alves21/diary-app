export const arraySort = (nameArray, toggle) => {
  if (toggle) {
    const nameArraySorted = nameArray.sort((a, b) => {
      return b.name.localeCompare(a.name)
    }) 
    return nameArraySorted
  } else {
    const nameArraySorted = nameArray.sort((a, b) => {
      return a.name.localeCompare(b.name)
    }) 
    return nameArraySorted
  }
}
