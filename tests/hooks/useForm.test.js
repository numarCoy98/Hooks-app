import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('pruebas useForm', () => {
    const initialState = {
        username: 'Numar',
        email: 'numarcoy@gmial.com',
    }
    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialState));
        expect(result.current).toEqual({
            "onInputChange": expect.any(Function),
            "onResetForm": expect.any(Function),
            "state": {
                "email": initialState.email,
                "username": initialState.username,
            },
        })
    })
    test('debe cambiar el nombre en el formulario', () => {
        const newName = 'Stiven'
        const { result } = renderHook(() => useForm(initialState));
        const { onInputChange } = result.current

        act(() => {
            onInputChange({
                target: {
                    value: newName,
                    name: 'username'
                }
            })
        })
        expect(result.current.state.username).toBe(newName)
    })
    test('debe reiniciar el formulario', () => {
        const newName = 'Stiven'
        const { result } = renderHook(() => useForm(initialState));
        const { onInputChange, onResetForm } = result.current

        act(() => {
            onInputChange({
                target: {
                    value: newName,
                    name: 'username'
                }
            })
            onResetForm();
        })
        expect(result.current.state).toStrictEqual({ username: '', email: '' })
    })
})