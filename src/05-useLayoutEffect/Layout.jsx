import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples/components";

export const Layout = () => {

    const { increment, counter } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { image, name, status } = !!data && data
    return (
        <>
            <h1>The Rick and Morty characters</h1>
            <hr />
            {isLoading ? <LoadingQuote /> : <Quote image={image} status={status} name={name} />}
            <button
                disabled={isLoading}
                className="btn btn-primary"
                onClick={() => increment()}>
                Next character
            </button>


        </>
    )
}
