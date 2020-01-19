import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/reducer';

import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('')

  const handleChange = (e) => {
    setItem(e.target.value)
  }
  const add = (e) => {
    e.preventDefault()
    dispatch({type: 'ADD', payload: item})
  }
  const complete = (id) => {
    dispatch({type: 'COMPLETE', payload: id})
  }
  return (
    <div className="App">
      {state.items.map(el => (
        <p onClick={() => complete(el.id)} className={el.completed ? 'cross' : 'not'} key={el.id}>{el.item}</p>
      ))}
      <ToDoList />
      <form onSubmit={add}>
        <label>Add a To Do</label>
        <input
        onChange={handleChange}
        value={item}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
