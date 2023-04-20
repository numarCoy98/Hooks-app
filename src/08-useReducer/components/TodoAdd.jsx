import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
// import PropTypes from 'prop-types'

const TodoAdd = ({ onNewTodo }) => {

    const { state: { description }, onInputChange, onResetForm } = useForm({ description: '' })
    // const [inputValue, setInputValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanValue = description.trim()
        if (cleanValue) {
            onNewTodo({
                id: new Date().getTime(),
                description,
                done: false
            })
            onResetForm()
        }
    }
    return (
        <form onSubmit={onSubmit} >
            <input type="text"
                name='description'
                placeholder="Qué hay que hacer?"
                className="form-control"
                onChange={onInputChange}
                value={description}
            />
            <button type="submit"
                className="btn btn-outline-primary mt-1"
            > agregar</button>
        </form >
    )
}

// TodoAdd.propTypes = {}

export default TodoAdd