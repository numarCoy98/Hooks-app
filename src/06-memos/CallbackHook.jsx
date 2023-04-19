import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        (num = 1) => {
            setCounter((n) => n + num)
        },
        [],
    )

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
