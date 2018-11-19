import React, { Component } from 'react';
import {Row, Column, Container} from './components/skeleton.jsx';
import Tile from './components/titlePiece.jsx';

import Markdown from 'markdown-to-jsx';
const mdFile = require('./markdown/test.md');

class App extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Column width = "6">
						<h1><strong>Hi, I'm Kevin</strong></h1>
						<p>I'm currently a student Cornell University studying Information Science, Systems, & Technology.</p>
						<p>Next year, I will be pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics.</p>
						<h5><strong>I want to make the built environment responsive through technology.</strong></h5>
					</Column>
				</Row>
				<Row>
					<h1>Research Projects</h1>
					<p>My research focuses on the applications of design in the rapid prototyping, augmented reality, and robotics with a special focus on human-computer interaction.</p>
					<p>Much of the focus of human-computer interaction (HCI) right now is focused entirely on screens. However, computing is rapidly outgrowing the boundaries imposed by screens as augmented and virtual reality, 3D printing, and robotics become increasingly prevalent. In this realm, the rules that once dictated interfaces are inadequate for application in these messy physical realities and best practices and standards are yet to be defined. But it also a place of opportunity as the lack of boundaries make an exciting place for experimentation and innovation.</p>
				</Row>
				<Row>
					<Tile title="Distopia" subtitle="Build a Better Voting District" side="right"></Tile>
					<Tile title="transFORM" subtitle="Responsive Public Environments" side="right"></Tile>
				</Row>
				<Row>
					<Tile title="CrochetMatic" subtitle="Knitting in 3D" side="left"></Tile>
					<Tile title="RoMA" subtitle="Interactive Fabrication in AR" side="left"></Tile>
				</Row>
				<Row>
					<h1>Design Projects</h1>
				</Row>
				<Row>
					<Tile title="Cuberpillar" subtitle="Combining the geometric and organic" side="right"></Tile>
					<Tile title="OcularMD" subtitle="Letting the world see again" side="right"></Tile>
				</Row>
				<Row>
					<Tile title="CIAC VII" subtitle="Bringing order to a messy brand" side="left"></Tile>
					<Tile title="Life Changing Labs" subtitle="Giving startups a new beginning" side="left"></Tile>
				</Row>
				<Row>
					<Tile title="Cornell EMS" subtitle="Redfining an old stalwart" side="right"></Tile>
				</Row>
			</Container>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example

export default App;
