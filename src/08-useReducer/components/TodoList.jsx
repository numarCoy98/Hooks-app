import propTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [] }) => {
    console.log({ todos })
    return (
        <>
            <ul className="list-group">
                {todos.map((todo) => (<TodoItem key={todo.id} description={todo.description} />))}
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: propTypes.array
}

export default TodoList