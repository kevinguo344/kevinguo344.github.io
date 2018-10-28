import React from 'react'
//import PropTypes from 'prop-types'

import './skeleton.css'
import './normalize.css'

class Row extends React.Component{
	render(){
		return(
			<div className = "row">
				{this.props.children}
			</div>
		)
	}
}

export default Row
