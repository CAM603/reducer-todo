export const initialState = {
    items: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return state
        default:
            return state;
    }
}