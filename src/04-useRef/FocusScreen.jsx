import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()
    const onClick = (event) => {
        console.log({ inputRef })
        inputRef.current.select()
    }
    return (
        <>
            <h1>Focus screen</h1>
            <input
                ref={inputRef}
                type="text"
                placeholder="ingrese su nombre"
                className="form-control"
            />
            <button
                onClick={onClick}
                className="btn btn-primary mt-2" >
                Set focus
            </button>
        </>
    )
}
