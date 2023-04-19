import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "./components";

export const MultipleCustomHooks = () => {

    const { increment, counter } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { image, name, status } = !!data && data
    return (
        <>
            <h1>The Rick and Morty characters</h1>
            <hr />
            {/* {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        loading....
                    </div>
                ) :
                    (
                        // <blockquote className="blockquote text-end">
                        //     <img src={image} alt={name} />
                        //     <p className="mb-1">{name}</p>
                        //     <footer className="blockquote-footer">{status}</footer>
                        // </blockquote>
                    )
            } */}
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
