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


const renderTodos = () => {
  const todoDiv = document.querySelector( '#todos' )
  const todos = getTodos()
  const filters = getFilters()
  const filteredTodos = todos.filter( ( todo ) => {
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
    emptyMessage.textContent = '"No to-dos to show"'
    todoDiv.appendChild( emptyMessage )
  }
}


const generateTodoDOM = ( todo ) => {
  const todoEl = document.createElement( 'label' )
  const containerEl = document.createElement( 'div' )
  const todotext = document.createElement( 'span' )
  const checkbox = document.createElement( 'input' )
  const removeButton = document.createElement( 'button' )

  // Set up container
  todoEl.appendChild( containerEl )

  // Set up todo checkbox
  checkbox.setAttribute( 'type', 'checkbox' )
  checkbox.checked = todo.completed
  containerEl.appendChild( checkbox )
  checkbox.addEventListener( 'change', () => {
    toggleTodo( todo.id )
    renderTodos()
  } )

  // Set up todo text
  todotext.textContent = todo.text
  containerEl.appendChild( todotext )

  // Set up remove button
  removeButton.textContent = 'Remove'
  todoEl.appendChild( removeButton )
  removeButton.addEventListener( 'click', () => {
    removeTodo( todo.id )
    renderTodos()
  } )

  return todoEl
}


const generateSummaryDOM = ( incompletedTodos ) => {
  const summary = document.createElement( 'h2' )
  const plural = incompletedTodos.length === 1 ? '' : 's'

  summary.textContent = `You have ${incompletedTodos.length} todo${plural} left !`
  
  return summary
}


export { renderTodos, generateTodoDOM, generateSummaryDOM }