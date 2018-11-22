import React from 'react';
import { Row } from './skeleton.jsx';
import { Link } from 'react-router-dom'

export class Navbar extends React.Component{
	render(){
		return (
			<Row>
				<Link to = "/">
					<h2>Kevin Guo</h2>
				</Link>
			</Row>
		)
	}
}

export default Navbar;