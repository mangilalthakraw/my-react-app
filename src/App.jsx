// import React, { useReducer, createContext, useContext, useState } from 'react';

//const { useReducer } = require("react")

// // 1. Create the context
// const TodoContext = createContext();

// // 2. Reducer function
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// // 3. Provider component
// const TodoProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(todoReducer, []);

//   return (
//     <TodoContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// // Custom hook to use the TodoContext
// const useTodos = () => {
//   return useContext(TodoContext);
// };

// // 4. TodoList component
// const TodoList = () => {
//   const { state, dispatch } = useTodos();

//   return (
//     <ul>
//       {state.map(todo => (
//         <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//           {todo.text}
//           <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
//             {todo.completed ? 'Undo' : 'Complete'}
//           </button>
//           <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
//             Remove
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// // 5. AddTodo component
// const AddTodo = () => {
//   const { dispatch } = useTodos();
//   const [text, setText] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (text.trim()) {
//       dispatch({ type: 'ADD_TODO', payload: text });
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={e => setText(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// // 6. App component
// const App = () => {
//   return (
//     <TodoProvider>
//       <h1>Todo List</h1>
//       <AddTodo />
//       <TodoList />
//     </TodoProvider>
//   );
// };

// export default App;

import React, { useReducer } from 'react'
const App = () => {

  function reduser(state,action){
    if(action.type==='incre'){
      return state+1
    }
    else if(action.type==='decr'){
      return state-1
    }
    else{
      return state
    }

  }
  let [state,dispatch]=    useReducer(reduser,0)
  return (
    <div>
      <h2> {state}</h2>
      <button  onClick={()=>{dispatch({type:"incre"})}}>++</button>
      <button  onClick={()=>{dispatch({type:"decr"})}}>--</button>


    </div>
  )
}

export default App;