import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas useCounter hook', () => {
    // El valor por defecto es  10
    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        console.log({ result })
        const { increment, counter, decrement, reset } = result.current

        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    test('debe retornar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current
        expect(counter).toBe(100)
    })
    test('debe incremantar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current

        act(() => {
            increment();
            increment(4);
        });

        expect(result.current.counter).toBe(15)
        // como se ejuco la función increment, el valor debe mirarse en el result.current
    })
    test('debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current

        act(() => {
            decrement();
            decrement(4);
        });

        expect(result.current.counter).toBe(5)
    })

    test('debe reset el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { reset, increment } = result.current

        act(() => {
            increment(5);
            reset();
        });
        expect(result.current.counter).toBe(10)
        // como se ejuco la función increment, el valor debe mirarse en el result.current
    })
})