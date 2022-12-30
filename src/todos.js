// Setup the empty todos array

// loadTodos
// Arguments: none
// Return value: none

// saveTodos
// Arguments: none
// Return value: none

// getTodos
// Arguments: none
// Return value: todos array

// createTodo
// Arguments: todo text
// Return value: none

// removeTodo
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports

import uuidv4 from 'uuid/v4'

let todos = []


// Fetch the existing todos from localStorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem( 'notes' )

  try {
    todos = todosJSON ? JSON.parse( todosJSON ) : []
  } catch ( e ) {
    todos = []
  }
}


// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem( 'notes', JSON.stringify( todos ) )
}


// Expose todos from module
const getTodos = () => todos

const createTodo = ( text ) => {
  todos.push( {
    id: uuidv4(),
    text,
    completed: false
  } )

  saveTodos()
}


// Remove a todo
const removeTodo = ( id ) => {
  const todoIndex = todos.findIndex( ( todo ) => todo.id === id )

  if ( todoIndex > -1 ) {
    todos.splice( todoIndex, 1 )
    saveTodos()
  }
}


// Toggle the completed value from the given one
const toggleTodo = ( id ) => {
  const todo = todos.find( ( todo ) => todo.id === id )

  if ( todo ) {
    todo.completed = !todo.completed
    saveTodos()
  }
}


loadTodos()


export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }