// Set up filters default object

// getFilters
// Arguments: none
// Return value: filters object

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

// Make sure to set up the exports

const filters = {
  searchText: '',
  hideCompleted: false
}


const getFilters = () => filters


const setFilters = ( updates ) => {
  if ( typeof updates.searchText === 'string' ) {
    filters.searchText = updates.searchText
  }

  if ( typeof updates.hideCompleted === 'boolean' ) {
    filters.hideCompleted = updates.hideCompleted
  }
}


export { getFilters, setFilters }