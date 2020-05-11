import React from 'react';
import { Row, Column } from './skeleton.jsx';
import { Link } from "gatsby"

export class Navbar extends React.Component{
	render(){
		return (
			<Row>
				<Column width="1">
					<Link to = "/">
						<h2><i className="fas fa-angle-double-left"></i></h2>
					</Link>
				</Column>
				<Column width="11">
					<h2>Kevin Guo</h2>
				</Column>
			</Row>
		)
	}
}

export default Navbar;