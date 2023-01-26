export const nameSort = (nameArray) => {
  const nameArraySorted = nameArray.sort((a, b) => {
    return a.name.localeCompare(b.name)
  }) 
  return nameArraySorted
}