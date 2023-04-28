import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock("../../src/hooks/useTodo")

describe('teste de TodoApp', () => {
    test('', () => {
        useTodo.mockReturnValue({
            todos: [
                { id: 1, done: true, description: 'Hacer el portafolio ' },
                { id: 2, done: false, description: 'Hacer el portafolio de la chica' }
            ],
            handleDeleteTodo: jest.fn(),
            handleNewTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
            todosCount: 2,
            pendingTodosCount: 1
        })


        render(<TodoApp />)

        screen.debug()

        expect(screen.getByText('Hacer el portafolio')).toBeTruthy();
        expect(screen.getByText('Hacer el portafolio de la chica')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })


})