export const todoReducer = (initialState, action = {}) => {
    switch (action.type) {
        case 'ABC':
            // return initialState;
            throw new Error('Action.type no esta implementada ');

        default:
            return initialState;
    }
}