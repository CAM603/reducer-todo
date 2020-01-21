import React from 'react';
import { StyledTodoForm } from '../styles/StyledTodoForm';

const TodoForm = ({add, handleChange, item}) => {

    return (
        <StyledTodoForm>
            <form onSubmit={add}>
                <input
                type="text"
                onChange={handleChange}
                value={item}
                />
                <input type="submit"/>
            </form>
        </StyledTodoForm>
    )
}

export default TodoForm;