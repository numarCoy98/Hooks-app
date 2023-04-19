import { useReducer } from "react"
import TodoAdd from "./components/TodoAdd"
import TodoList from "./components/TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime() * 2,
        description: 'piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'piedra del espacio',
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({ todo })
    }

    return (
        <>
            <h1>TODO APP: 10,  <small>Pendientes: 2 </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
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
