export const todoReducer = (initialState, action = {}) => {
    switch (action.type) {
        case 'Add todo':
            // return initialState;
            // throw new Error('Action.type no esta implementada ');
            return [...initialState, action.payload]
        case 'Remove todo':
            return initialState.filter(todo => todo.id !== action.payload)
        case 'Check todo':
            return initialState.map(todo => todo.id === action.payload ?
                ({ ...todo, done: !todo.done }) :
                (todo))
        default:
            return initialState;
    }
}