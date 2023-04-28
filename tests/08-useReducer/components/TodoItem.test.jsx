import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../../src/08-useReducer/components/TodoItem";

describe('Pruebas en <TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Hacer el portafolio',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el Todo pendiente de completar', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />)
        // screen.debug()
        const liElement = screen.getByRole('listitem')
        // console.log(liElement.innerHTML)
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        const spanElement = screen.getByLabelText('span')

        //tener cuidado con el espacio en las clases que se arman en el componentes
        expect(spanElement.className).toBe("align-self-center ")
        expect(spanElement.className).toContain("align-self-center")
    })

    test('debe de mostrar el Todo completado', () => {
        todo.done = true
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />)

        // screen.debug()
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain("text-decoration-line-through")
    })

    test('span debe de llamar el toggleTodo cuando se hace click', () => {
        // todo.done = true
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />)


        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);
        // console.log(todo.id)
        expect(onToggleTodoMock).toHaveBeenCalled();

        console.log(spanElement)
        screen.debug()
        // expect(spanElement.className).toContain("text-decoration-line-through")
    })
    test('span debe de llamar onDeleteTodo', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />)

        const buttonElement = screen.getByRole('button', { name: 'borrar' })
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalled();
    })
})