import Component from './component'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../reducers'

interface OwnProps {
    name: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
    return {
        ...ownProps,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    }
}

const <%= componentName %> = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component)

export default <%= componentName %>
