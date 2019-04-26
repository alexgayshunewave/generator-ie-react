import * as React from 'react'
import './hello.scss'

export interface IProps {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void
    onDecrement?: () => void
}

export interface IState {
    languageName: string
    enthusiasmLevel: number
}

class Hello extends React.Component<IProps, IState> {

    // helpers
    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!')
    }

    render() {

        const { name, enthusiasmLevel = 1, onDecrement, onIncrement } = this.props

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D')
        }

        return (
            <div className='hello'>
                <div className='greeting'>
                    Hello {name + this.getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>
        )
    }
}

export default Hello
