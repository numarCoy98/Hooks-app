import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Pruebas al componente <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Numar Coy'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
        // screen.debug()
    })

    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        // data = JSON.parse(preTag.innerHTML)
        // console.log(JSON.parse(preTag.innerHTML).name)

        expect(JSON.parse(preTag.innerHTML)).toStrictEqual(user)
        // screen.debug()
    })
})