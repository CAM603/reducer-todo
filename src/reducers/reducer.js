export const initialState = {
    items: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                items: [...state.items,
                    {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
            case 'COMPLETE':
                let arr = state.items.map(el => el.id === action.payload ? {...el, completed: !el.completed} : el)
                return {...state,
                    items: arr
                };
        default:
            return state;
    }
}