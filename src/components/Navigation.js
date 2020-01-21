import React from 'react';
import { StyledNav } from '../styles/StyledNav';
import { StyledButton } from '../styles/StyledButton';

const Navigation = ({toggleForm, adding}) => {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

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
