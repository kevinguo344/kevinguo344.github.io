import React, { Component } from 'react';
import {Row, Column, Container} from './skeleton.jsx';
import Markdown from 'markdown-to-jsx';
import Navbar from './navbar.jsx';

class Project extends Component {
	constructor(props){
		super(props);
		this.mdFile = require('../markdown/' + this.props.markdown);
		console.log(this.mdFile);
	}
	render() {
		return(
			<Container>
				<Navbar></Navbar>
				<Row>
					<Column width="12">
						<Markdown>
							{this.mdFile}
						</Markdown>
					</Column>
				</Row>
			</Container>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example

export default Project;
