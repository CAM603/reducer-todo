import React from 'react';
import { StyledTodo } from '../styles/StyledTodo';

const Todo = ({todo, complete, deleteTodo}) => {

    return (
        <StyledTodo>
            <p>{todo.completed ? '[✓]' : '[ ]'}</p>
            <h3 onClick={() => complete(todo.id)} className={todo.completed ? 'cross' : 'not'}>{todo.todo}</h3>
            {todo.completed ? <button onClick={() => deleteTodo(todo.id)}>Delete</button> : <button>Edit</button>}
        </StyledTodo>
    )
}

export default Todo;
