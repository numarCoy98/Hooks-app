import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Prueba de <loginPage/>', () => {

    const newUser = {
        id: 123,
        name: 'Numar Coy',
        email: 'numarcoy@gmail.com'
    }
    const setUserMock = jest.fn();

    test('debe de mostrar el componente sin el usuario', () => {
        render(<UserContext.Provider value={{ user: null }}>
            <LoginPage />
        </UserContext.Provider>)
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
        // screen.debug();
    })
    test('debe de llamar setUser cuando hacemos clic en el botón', () => {
        render(<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
            <LoginPage />
        </UserContext.Provider>)
        const buttonElement = screen.getByRole('button')

        fireEvent.click(buttonElement)

        expect(setUserMock).toHaveBeenCalledWith(newUser);
        // console.log({ buttonElement, setUserMock })

        screen.debug()

    })
})