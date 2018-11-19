import React, { Component } from 'react';
import {Row} from './components/row.js';
import {Column} from './components/column.js';
import {Container} from './components/container.js';
import Markdown from 'markdown-to-jsx';

const mdFile = require('./markdown/test.md');

class App extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Column width = "6" style={{"margin-top": "25%"}}>
						<h1><strong>Hi, I'm Kevin</strong></h1>
						<p>I'm currently a student Cornell University studying Information Science, Systems, & Technology.</p>
						<p>Next year, I will be pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics.</p>
						<h5><strong>I want to make the built environment responsive through technology.</strong></h5>
					</Column>
				</Row>
				<Markdown>
					{mdFile}
				</Markdown>
			</Container>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example

export default App;
