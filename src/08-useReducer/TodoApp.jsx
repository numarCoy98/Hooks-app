import { useTodo } from "../hooks/useTodo"
import TodoAdd from "./components/TodoAdd"
import TodoList from "./components/TodoList"

export const TodoApp = () => {
    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo()
    console.log({ pendingTodosCount })
    return (
        <>
            <h1>TODO APP: {todosCount},  <small>Pendientes: {pendingTodosCount} </small> </h1>
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
