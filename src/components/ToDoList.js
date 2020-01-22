import React, { useContext } from 'react';
import Todo from './Todo';
import { StyledButton } from '../styles/StyledButton';
import { ContextObj } from '../App';

const TodoList = (props) => {
    const { value } = useContext(ContextObj);
    const [state, dispatch] = value;
    
    const deleteComplete = () => {
        dispatch({type: 'DELETE_COMPLETE'})
    }

    return (
        <div className="todo-list">
            {state.todos.map(todo => (
                <Todo key={todo.id} todo={todo}/>
            ))}
            <div>
                <StyledButton 
                color='red'
                onClick={deleteComplete}>Delete Completed</StyledButton>
            </div>
        </div>
        )
}


export default TodoList;