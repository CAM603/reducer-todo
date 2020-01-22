import React, { useContext } from 'react';
import { StyledTodo } from '../styles/StyledTodo';
import { StyledButton } from '../styles/StyledButton';
import { ContextObj } from '../App';

const Todo = ({todo}) => {
    
    const { value } = useContext(ContextObj)
    const [state, dispatch] = value;

    const complete = (id) => {
        dispatch({type: 'COMPLETE', payload: id})
    }
    const deleteTodo = (id) => {
        dispatch({type: 'DELETE_TODO', payload: id})
    }
    
    return (
        <StyledTodo>
            <p>{todo.completed ? '[✓]' : '[ ]'}</p>
            <h3 
            onClick={() => complete(todo.id)} 
            className={todo.completed ? 'cross' : 'not'}>{todo.todo}</h3>
            {todo.completed ? 
            <StyledButton
            color="red"
            onClick={() => deleteTodo(todo.id)}>Delete</StyledButton> :
            <StyledButton
            color="darkorange"
            >Edit</StyledButton>}
        </StyledTodo>
    )
}

export default Todo;
