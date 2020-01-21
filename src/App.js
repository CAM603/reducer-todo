import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/reducer';

import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('');
  const [adding, setAdding] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value)
  }
  const add = (e) => {
    e.preventDefault()
    dispatch({type: 'ADD', payload: item})
    setItem('')
    setAdding(!adding)
  }
  const complete = (id) => {
    dispatch({type: 'COMPLETE', payload: id})
  }
  const deleteComplete = () => {
    dispatch({type: 'DELETE_COMPLETE'})
  }
  const toggleForm = () => {
    setAdding(!adding)
  }
  const deleteTodo = (id) => {
    dispatch({type: 'DELETE_TODO', payload: id})
  }

  const addForm = adding ? <TodoForm add={add} item={item} handleChange={handleChange}/> : null;

  return (
    <>
      <div className="app-container">
        <div className="app">
          <Navigation toggleForm={toggleForm} adding={adding}/>
          {addForm}
          <TodoList 
          todos={state.todos} 
          complete={complete} 
          deleteTodo={deleteTodo}/>
          <button onClick={deleteComplete}>Delete Completed</button>
        </div>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
