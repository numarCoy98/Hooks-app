console.log('Hola mundo')


const initialState = [{
    id: 1,
    todo: 'recolectar la piedra del alma',
    done: false,
}];


const todoReducer = (state = initialState, action = {}) => {
    console.log({ action })
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'recolectar la piedra del tiempo',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo', //esta variable es conocida como la action
    payload: newTodo, //la cargada de la action
}

todos = todoReducer(todos, addTodoAction)

console.log({ todos })