import propTypes from 'prop-types'

const TodoItem = ({ description }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">
                {description}
            </span>
            <button className="btn btn-danger">borrar</button>
        </li>
    )
}
TodoItem.propTypes = {
    description: propTypes.string.isRequired
}

export default TodoItem