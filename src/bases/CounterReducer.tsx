import {useReducer, useState} from 'react';

interface CounterState {
    counter: number;
    previous: number;
    changes: number;

}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction = { type: 'increaseBy', payload: {value: number} } | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction ): CounterState => {

    const { counter, changes} = state;

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        case 'increaseBy':
            return {
                changes: changes + 1,
                counter: counter + action.payload.value,
                previous: counter
            }

        default:
            return state;
    }

}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch({type: 'reset'})
    };

    const increaseBy = (value: number = 1) => {
        // setCounter((prev: number) => prev + 1);
        dispatch({type: 'increaseBy', payload: {value}})
    };

    return (
        <>
            <h1>CounterReducer</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>

            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() => increaseBy(10)}>
                +10
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    );
};
