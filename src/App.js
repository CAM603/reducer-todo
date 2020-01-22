import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/reducer';
import { createContext } from 'react';

import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export const ContextObj = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('');
  const [adding, setAdding] = useState(false);

  const addForm = adding ? <TodoForm/> : null;

  return (
    <>
      <div className="app-container">
        <div className="app">
          <ContextObj.Provider 
          value={{value: [state, dispatch], 
                  value2: [item, setItem], 
                  value3: [adding, setAdding]}}>
            <Navigation/>
            {addForm}
            <TodoList/>
          </ContextObj.Provider>
        </div>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
