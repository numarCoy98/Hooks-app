import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        }
        // console.log('message mounted')
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // console.log('message unmounted')
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <h1>usuario ya existe</h1>
            {JSON.stringify(coords)}
        </>
    )
}
