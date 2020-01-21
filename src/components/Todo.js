import React from 'react';

const Todo = ({todo, complete}) => {

    return (
        <div>
            <p onClick={() => complete(todo.id)} className={todo.completed ? 'cross' : 'not'}>{todo.todo}</p>
        </div>
    )
}

export default Todo;
