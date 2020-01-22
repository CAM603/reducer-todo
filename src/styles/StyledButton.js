import styled from 'styled-components';

export const StyledButton = styled.button`
    outline: none;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background: #bbe1fa;
    color: ${props => props.color};
    border: solid 2px ${props => props.color};
`;