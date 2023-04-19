import { useState } from "react"

// {
//     username: '',
//     email: '',
//     password: ''
// }

export const useForm = (initialForm) => {
    const [state, setFormState] = useState(initialForm)

    const onInputChange = ({ target: { value, name } }) => {
        setFormState(state => ({
            ...state,
            [name]: value
        }))
    }
    const onResetForm = () => {
        setFormState((state) => Object.keys(state).reduce((acc, cv) => { return { ...acc, [cv]: '' } }, {}))
    }
    // Podemos poner las variables iniciales pero esto no nos asegura que estos sean vacíos como se puede ver abajo
    // const onResetForm = () => {
    //     setFormState(initialForm)
    // }
    return {
        state, onInputChange, onResetForm
    }
}
