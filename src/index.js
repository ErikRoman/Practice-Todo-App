// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

import { setFilters } from "./filters";
import { renderTodos } from "./views";

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage


renderTodos()


// Set up search text handler
document.querySelector( '#search-text' ).addEventListener( 'input', ( event ) {
  setFilters( {
    searchText: event.target.value
  } )

  renderTodos()
} )


// Set up checkbox handler
document.querySelector( '#hide-completed' ).addEventListener( 'change', ( event ) {
  setFilters( {
    hideCompleted: event.target.checked
  } )

  renderTodos()
} )


// Set up form submission handler