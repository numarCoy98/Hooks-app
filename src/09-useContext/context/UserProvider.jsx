import { UserContext } from "./UserContext"
import React, { useState } from 'react'

// const user = {
//     id: 123,
//     name: 'Numar Coy',
//     email: 'numarcoy@gmail.com'
// }

export const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const { children } = props
    console.log({ children, props })
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
