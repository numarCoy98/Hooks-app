import propTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    console.log({ todos })
    return (
        <>
            <ul className="list-group">
                {todos.map((todo) => (<TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={() => onDeleteTodo(todo.id)}
                    onToggleTodo={() => onToggleTodo(todo.id)}
                />))}
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: propTypes.array
}

export default TodoList