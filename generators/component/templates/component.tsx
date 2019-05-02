import * as React from 'react'
import './<%= componentName %>.scss'

export interface IProps {

}

export interface IState {

}

class <%= componentName %> extends React.Component<IProps, IState> {

    render() {
        return (
            <div className='<%= componentName %>'>
                
            </div>
        )
    }
}

export default <%= componentName %>
