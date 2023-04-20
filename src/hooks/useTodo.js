import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

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

    const todosCount = todos.length

    const pendingTodosCount = todos.filter(todo => todo.done === false).length

    return ({ todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, pendingTodosCount })
}
