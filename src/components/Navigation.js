import React, { useContext } from 'react';
import { StyledNav } from '../styles/StyledNav';
import { StyledButton } from '../styles/StyledButton';
import { ContextObj } from '../App';

const Navigation = (props) => {
    const { value3 } = useContext(ContextObj);
    const [adding, setAdding] = value3;
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const toggleForm = () => {
        setAdding(!adding)
    }      

    return (
        <StyledNav>
            <p>{today}</p>
            <StyledButton
            color="green"
            onClick={() => toggleForm()}>
                {adding ? '' : '+'}
            </StyledButton>
        </StyledNav>
    )
}

export default Navigation;
