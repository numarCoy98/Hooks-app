import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }]

    test('debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState);

    })

    test('debe agregar un todo', () => {
        const action = {
            type: 'Add todo',
            payload: {
                id: 2,
                description: 'nuevo todo creado desde test',
                done: false
            }
        }
        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })

    test('debe eliminar un TODO', () => {
        const action = {
            type: 'Remove todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(0);

    })

    test('debe realizar el toggle del TODO', () => {
        const action = {
            type: 'Check todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action)
        // console.log({ newState })
        expect(newState[0].done).toBeTruthy();
        const newState2 = todoReducer(newState, action)

        expect(newState2[0].done).toBeFalsy();

    })
})