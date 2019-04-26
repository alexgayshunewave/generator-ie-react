import { EnthusiasmAction, INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../actions'

import { IState } from '../components/hello/component'

const initialState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
}

export function enthusiasm(state: IState = initialState, action: EnthusiasmAction): IState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
        default:
            return state
    }
}
