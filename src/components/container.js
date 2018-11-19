import React from 'react'
//import PropTypes from 'prop-types'

import './skeleton.css'
import './normalize.css'

export class Container extends React.Component{
    render(){
        return(
			<div className = "container">
				{this.props.children}
			</div>
		)
    }
}

export default Container
