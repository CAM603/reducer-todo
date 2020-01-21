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
  }
  const complete = (id) => {
    dispatch({type: 'COMPLETE', payload: id})
  }
  const deleteComplete = () => {
    dispatch({type: 'DELETE'})
  }
  const toggleForm = () => {
    setAdding(!adding)
  }

  const addForm = adding ? <TodoForm add={add} item={item} handleChange={handleChange}/> : null;

  return (
    <div className="App">
      <Navigation toggleForm={toggleForm}/>
      <TodoList todos={state.todos} complete={complete}/>
      {addForm}
      <button onClick={deleteComplete}>Delete</button>
      <GlobalStyle />
    </div>
  );
}

export default App;
