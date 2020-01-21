import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, complete, deleteTodo}) => {

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <Todo todo={todo} complete={complete} deleteTodo={deleteTodo}/>
            ))}
        </div>
        )
}


export default TodoList;