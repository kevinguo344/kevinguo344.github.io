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
							<p>I'm currently a student Cornell University studying Information Science, Systems, & Technology. I'm also pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics. My advisor is <a href="https://arl.human.cornell.edu/people_keith.htm">Prof. Keith Green</a> of the Design + Environmental Analysis (DEA) department.</p>
							<p>I'm interested in learning how technology can make design more accessible, useful, and exciting, especially interested in its applications to architecture and the built environment.</p>
						</Column>
					</Row>
				</Page>
				<Page>
					<MediaQuery minWidth={550}>
						<Row>
							<h1>Research Projects</h1>
							<p>My research focuses on the applications of design in the rapid prototyping, augmented reality, and robotics with a special focus on human-computer interaction.</p>
						</Row>
						<Row>
							<Tile project="crochetmatic" side="left"></Tile>
							<Tile project="roma" side="left"></Tile>
						</Row>
						<Row>
							<Tile project="distopia" side="right"></Tile>
							<Tile project="transform" side="right"></Tile>
						</Row>
					</MediaQuery>
					<MediaQuery maxWidth={550}>
						<Row>
							<h1>Research Projects</h1>
						</Row>
						<Row>
							<Tile project="crochetmatic" side="right"></Tile>
							<Tile project="roma" side="left"></Tile>
						</Row>
						<Row>
							<Tile project="distopia" side="right"></Tile>
							<Tile project="transform" side="left"></Tile>
						</Row>
					</MediaQuery>
				</Page>
			</Container>
		);
	}
}

export default Home;
