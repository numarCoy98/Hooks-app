import { memo } from "react"

export const Small = memo(({ value }) => {
    console.log('small render again')
    return (<small>{value}</small>)
})

