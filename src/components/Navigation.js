import React from 'react';
import { StyledNav } from '../styles/StyledNav';

const Navigation = ({toggleForm, adding}) => {
    return (
        <StyledNav>
            <p>Date Here</p>
            <button onClick={() => toggleForm()}>{adding ? '' : '+'}</button>
        </StyledNav>
    )
}

export default Navigation;
