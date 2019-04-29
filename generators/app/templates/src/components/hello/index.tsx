import * as actions from '../../actions'
import Component from './component'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface OwnProps {
    name: string
}

const mapStateToProps = (state, ownProps: OwnProps) => {
    return {
        ...ownProps,
        enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
        name: state.enthusiasm.languageName,
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
