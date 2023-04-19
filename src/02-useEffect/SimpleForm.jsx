import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [{ username, email }, setFormState] = useState({
        username: 'Numar',
        email: 'numar@gmail.com'
    })

    const onInputChange = ({ target: { value, name } }) => {
        // console.log({ name, value })
        setFormState(state => ({
            ...state,
            [name]: value
        }))
    }

    // useEffect(() => {
    //     console.log('useEffect called!')
    //     // console.log({ username })
    // }, [])

    // useEffect(() => {
    //     console.log('useEffect called! 2')
    //     // console.log({ username })
    // }, [username, email])

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="username@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {username === 'Numar' && <Message />}
        </>
    )
}
