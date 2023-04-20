import { useEffect, useReducer } from "react"
import TodoAdd from "./components/TodoAdd"
import TodoList from "./components/TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime() * 2,
    //     description: 'piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'piedra del espacio',
    //     done: false
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add todo',
            payload: todo
        }
        dispatch(action)
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Check todo',
            payload: id
        })
    }

    return (
        <>
            <h1>TODO APP: 10,  <small>Pendientes: 2 </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5" >
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
