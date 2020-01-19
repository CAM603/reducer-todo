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
                items: [...state.items,{
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
        default:
            return state;
    }
}