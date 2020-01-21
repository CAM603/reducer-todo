import React from 'react';
import Todo from './Todo';
import { StyledButton } from '../styles/StyledButton';

const TodoList = ({todos, complete, deleteTodo, deleteComplete}) => {

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <Todo todo={todo} complete={complete} deleteTodo={deleteTodo}/>
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