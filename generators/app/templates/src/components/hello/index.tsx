import * as actions from '../../actions'

import { connect } from 'react-redux'
import Component, { IState } from './component'
import { Dispatch } from 'redux'

interface OwnProps {
    name: string
}

const mapStateToProps = (state: IState, ownProps: OwnProps) => {
    return {
        ...ownProps,
        enthusiasmLevel: state.enthusiasmLevel,
        name: state.languageName,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

const Hello = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component)

export default Hello
