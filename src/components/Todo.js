import React from 'react';
import { StyledTodo } from '../styles/StyledTodo';
import { StyledButton } from '../styles/StyledButton';

const Todo = ({todo, complete, deleteTodo}) => {

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
            color="orange"
            >Edit</StyledButton>}
        </StyledTodo>
    )
}

export default Todo;
