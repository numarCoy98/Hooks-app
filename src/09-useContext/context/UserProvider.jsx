import { UserContext } from "./UserContext"
import React from 'react'

const user = {
    id: 123,
    name: 'Numar Coy',
    email: 'numarcoy@gmail.com'
}

export const UserProvider = (props) => {
    const { children } = props
    console.log({ children, props })
    return (
        <UserContext.Provider value={{ hola: 'mundo', user }}>
            {children}
        </UserContext.Provider>
    )
}
