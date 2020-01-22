import React, {useContext} from 'react';
import { StyledTodoForm } from '../styles/StyledTodoForm';
import { ContextObj } from '../App';

const TodoForm = (props) => {
    const { value, value2, value3 } = useContext(ContextObj);
    const [state, dispatch] = value;
    const [item, setItem] = value2;
    const [adding, setAdding] = value3;

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const add = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD', payload: item})
        setItem('')
        setAdding(!adding)
    }

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