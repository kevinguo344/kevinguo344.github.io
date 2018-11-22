import React, { Component } from 'react';
import {Row, Column, Container} from './skeleton.jsx';
import Navbar from './navbar.jsx';

class Project extends Component {
	render() {
		return(
			<Container>
				<Navbar></Navbar>
				<Row>
					<Column width="12">
						{this.props.children}
					</Column>
				</Row>
			</Container>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example

export default Project;
