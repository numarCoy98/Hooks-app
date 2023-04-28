import propTypes from 'prop-types'

const TodoItem = ({ todo: { description, done }, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}
                onClick={onToggleTodo}
                aria-label="span"
            >
                {description}
            </span>
            <button className="btn btn-danger" onClick={onDeleteTodo}>borrar</button>
        </li>
    )
}
TodoItem.propTypes = {
    description: propTypes.string.isRequired
}

export default TodoItem