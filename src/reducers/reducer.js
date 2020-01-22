export const initialState = {
    todos: [{
        todo: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            if (!action.payload) {
                return state
            } else {
                return {
                    ...state,
                    todos: [...state.todos,
                        {
                        todo: action.payload,
                        completed: false,
                        id: Date.now()
                    }],
                }
            }
            case 'COMPLETE':
                return {...state,
                    todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
                };
            case 'DELETE_COMPLETE':
                return {...state,
                    todos: state.todos.filter(todo => todo.completed === false)
                }
            case 'DELETE_TODO':
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.payload)
                }
        default:
            return state;
    }
}