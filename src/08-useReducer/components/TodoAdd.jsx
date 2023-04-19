import { useState } from 'react'
// import PropTypes from 'prop-types'

const TodoAdd = ({ onNewTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanValue = inputValue.trim()
        if (cleanValue) {
            onNewTodo({
                id: new Date().getTime(),
                description: cleanValue,
                done: false
            })
            setInputValue('')
        }
    }
    return (
        <form onSubmit={onSubmit} >
            <input type="text"
                placeholder="Qué hay que hacer?"
                className="form-control"
                onChange={({ target: { value } }) => setInputValue(value)}
                value={inputValue}
            />
            <button type="submit"
                className="btn btn-outline-primary mt-1"
            > agregar</button>
        </form >
    )
}

// TodoAdd.propTypes = {}

export default TodoAdd