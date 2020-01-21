import styled from 'styled-components';

export const StyledTodoForm = styled.div`
    background: #bbe1fa;
    color: #1b262c;
    padding: 10px;
    display: flex;
    justify-content: center;
    
    form {
        display: flex;
        justify-content: center;
        max-width: 300px;

        input[type="text"] {
            width: 300px;
            height: 20px;
            padding-right: 50px;
            outline: none;
        }
        
        input[type="submit"] {
            margin-left: -50px;
            height: 25px;
            width: 50px;
            background: #0f4c75;
            color: #bbe1fa;
            border: 0;
            -webkit-appearance: none;
        }
    }
`;