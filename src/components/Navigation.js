import React from 'react';

const Navigation = ({toggleForm}) => {
    return (
        <div>
            <p>Date Here</p>
            <button onClick={() => toggleForm()}>Add</button>
        </div>
    )
}

export default Navigation;
