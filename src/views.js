// renderTodos
// Arguments: none
// Return value: none

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

// Make sure to set up the exports

import { getFilters } from "./filters"
import { getTodos, removeTodo, toggleTodo } from "./todos"


// Render todos application
const renderTodos = () => {
  const todoDiv = document.querySelector( '#todos' )
  const filters = getFilters()
  let filteredTodos = getTodos().filter( ( todo ) => {
    const searchTextMatch = todo.text.toLowerCase().includes( filters.searchText.toLowerCase() )
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
  } )

  const incompletedTodos = filteredTodos.filter( ( todo ) => !todo.completed )

  todoDiv.innerHTML = ''

  const summary = generateSummaryDOM( incompletedTodos )
  todoDiv.appendChild( summary )

  if ( filteredTodos.length > 0 ) {
    filteredTodos.forEach( ( todo ) => {
      const todoEl = generateTodoDOM( todo )
      todoDiv.appendChild( todoEl )
    } )
  } else {
    const emptyMessage = document.createElement( 'p' )
    emptyMessage.textContent = 'No to-dos to show'
    todoDiv.appendChild( emptyMessage )
  }
}


// Generate DOM structure for a todo
const generateTodoDOM = ( todo ) => {
  const todoEl = document.createElement( 'label' )
  const containerEl = document.createElement( 'div' )
  const checkbox = document.createElement( 'input' )
  const textEl = document.createElement( 'span' )
  const removeEl = document.createElement( 'button' )

  // Set up checkbox
  checkbox.setAttribute( 'type', 'checkbox' )
  checkbox.checked = todo.completed
  containerEl.appendChild( checkbox )
  checkbox.addEventListener( 'change', () => {
    toggleTodo( todo.id )
    renderTodos()
  } )

  // Set up text element
  textEl.textContent = todo.text
  containerEl.appendChild( textEl )

  // Set up container
  todoEl.appendChild( containerEl )

  // Set up remove button
  removeEl.textContent = 'Remove'
  todoEl.appendChild( removeEl )
  removeEl.addEventListener( 'click', () => {
    removeTodo( todo.id )
    renderTodos()
  } )

  return todoEl
}


// Set up a sumamry for incompleted todos
const generateSummaryDOM = ( incompletedTodos ) => {
  const summary = document.createElement( 'h2' )
  const plural = incompletedTodos.length === 1 ? '' : 's'

  summary.textContent = `You have ${ incompletedTodos.length } todo${plural} left!`

  return summary
}


export { renderTodos, generateTodoDOM, generateSummaryDOM }