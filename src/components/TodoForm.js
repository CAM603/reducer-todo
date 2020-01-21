import React from 'react';

const TodoForm = ({add, handleChange, item}) => {

    return (
        <div>
            <form onSubmit={add}>
                <label>Add a To Do</label>
                <input
                onChange={handleChange}
                value={item}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;