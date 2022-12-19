// renderTodos
// Arguments: none
// Return value: none

import { getFilters } from "./filters"
import { getTodos } from "./todos"

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

// Make sure to set up the exports


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