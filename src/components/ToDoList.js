import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, complete}) => {

    return (
        <div>
            {todos.map(todo => (
                <Todo todo={todo} complete={complete}/>
            ))}
        </div>
        )
}


export default TodoList;