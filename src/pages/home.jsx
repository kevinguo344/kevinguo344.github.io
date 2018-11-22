import React, { Component } from 'react';
import {Row, Column, Container} from '../components/skeleton.jsx';
import Tile from '../components/titlePiece.jsx';
import Page from '../components/pageView.jsx';
import MediaQuery from 'react-responsive';

class Home extends Component {
	render() {
		return (
			<Container>
				<Page>
					<Row>
						<Column width = "6">
							<h1><strong>Hi, I'm Kevin</strong></h1>
							<p>I'm currently a student Cornell University studying Information Science, Systems, & Technology.</p>
							<p>Next year, I will be pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics.</p>
							<h5><strong>I want to make the built environment responsive through technology.</strong></h5>
						</Column>
					</Row>
				</Page>
				<Page>
					<MediaQuery minWidth={550}>
						<Row>
							<h1>Research Projects</h1>
							<p>My research focuses on the applications of design in the rapid prototyping, augmented reality, and robotics with a special focus on human-computer interaction.</p>
							<p>Much of the focus of human-computer interaction (HCI) right now is focused entirely on screens. However, computing is rapidly outgrowing the boundaries imposed by screens as augmented and virtual reality, 3D printing, and robotics become increasingly prevalent. In this realm, the rules that once dictated interfaces are inadequate for application in these messy physical realities and best practices and standards are yet to be defined. But it also a place of opportunity as the lack of boundaries make an exciting place for experimentation and innovation.</p>
						</Row>
						<Row>
							<Tile project="distopia" side="right"></Tile>
							<Tile project="transform" side="right"></Tile>
						</Row>
						<Row>
							<Tile project="crochetmatic" side="left"></Tile>
							<Tile project="roma" side="left"></Tile>
						</Row>
					</MediaQuery>
					<MediaQuery maxWidth={550}>
						<Row>
							<h1>Research Projects</h1>
							<p>My research focuses on the applications of design in the rapid prototyping, augmented reality, and robotics with a special focus on human-computer interaction.</p>
							<p>Much of the focus of human-computer interaction (HCI) right now is focused entirely on screens. However, computing is rapidly outgrowing the boundaries imposed by screens as augmented and virtual reality, 3D printing, and robotics become increasingly prevalent. In this realm, the rules that once dictated interfaces are inadequate for application in these messy physical realities and best practices and standards are yet to be defined. But it also a place of opportunity as the lack of boundaries make an exciting place for experimentation and innovation.</p>
						</Row>
						<Row>
							<Tile project="distopia" side="right"></Tile>
							<Tile project="transform" side="left"></Tile>
						</Row>
						<Row>
							<Tile project="crochetmatic" side="right"></Tile>
							<Tile project="roma" side="left"></Tile>
						</Row>
					</MediaQuery>
				</Page>
			</Container>
		);
	}
}

export default Home;
