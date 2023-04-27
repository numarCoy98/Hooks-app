import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock('../../src/hooks/useFetch.js')
jest.mock('../../src/hooks/useCounter.js')

describe('pruebas en <MultipleCustomHooks', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    // se ejecuta despues de cada "test"
    // en este caso limpiamos todos las pruebas
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de demostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />)


        expect(screen.getByText('loading....'))
        expect(screen.getByText('The Rick and Morty characters'))
        const nextButton = screen.getByRole('button', { name: 'Next character' });
        expect(nextButton.disabled).toBeTruthy()
        screen.debug();

    })
    test('debe de mostrar un personaje', () => {

        useFetch.mockReturnValue({
            data: {
                "name": "Rick Sanchez",
                "status": "Alive",
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            },
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        // useFetch()
        // console.log(container)
        // console.log(screen.getByText('Rick Sanchez'), container)

        expect(screen.getByText('Rick Sanchez')).toBeTruthy();
        expect(screen.getByText('Alive')).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next character' });
        expect(nextButton.disabled).toBeFalsy();
        screen.debug();
    })
    test('debe llamar la función de incrementar', () => {


        useFetch.mockReturnValue({
            data: {
                "name": "Rick Sanchez",
                "status": "Alive",
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            },
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next character' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })
})