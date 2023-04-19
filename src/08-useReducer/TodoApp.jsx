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
    return (
        <>
            <h1>TODO APP: 10,  <small>Pendientes: 2 </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                    {/* <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">
                                Item 1
                            </span>
                            <button className="btn btn-danger">borrar</button>
                        </li>
                    </ul> */}
                </div>
                <div className="col-5" >
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={(n) => console.log({ n })} />
                    {/* <form >
                        <input type="text"
                            placeholder="Qué hay que hacer?"
                            className="form-control"
                        />
                        <button type="submit"
                            className="btn btn-outline-primary mt-1"
                        > agregar</button>
                    </form> */}
                </div>
            </div>
        </>
    )
}
