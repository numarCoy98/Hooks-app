import propTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ name, image, status }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width: 0, height: 0
    })
    useLayoutEffect(() => {
        // console.log(pRef.current.getBoundingClientRect())
        const { width, height } = pRef.current.getBoundingClientRect()
        setBoxSize({ width, height })
    }, [name])

    return (<>
        <blockquote className="blockquote text-end"
            style={{ display: 'flex' }}>
            <p ref={pRef} className="mb-1">{name}</p>
            <img src={image} alt={name} />
            <footer className="blockquote-footer">{status}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </>
    )
}
Quote.propTypes = {
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    status: propTypes.string.isRequired
}