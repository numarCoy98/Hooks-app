import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

    const { state: { username, email, password }, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h1>Formulario con Custom hook</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">borrar</button>

            {/* {username === 'Numar' && <Message />} */}
        </>
    )
}
