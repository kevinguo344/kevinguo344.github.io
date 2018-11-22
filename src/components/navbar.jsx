import React from 'react';
import { Row } from './skeleton.jsx';
import { Link } from 'react-router-dom'

export class Navbar extends React.Component{
	render(){
		return (
			<Row>
				<Link to = "/">
					<h1>Kevin Guo</h1>
				</Link>
			</Row>
		)
	}
}

export default Navbar;