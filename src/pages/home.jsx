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
						</Column>
					</Row>
					<Row>
						<Column width = "8">
							<p>I'm currently a student Cornell University pursuing a Masters of Engineering in Mechanical Engineering focusing on Robotics. My advisor is <a href="https://arl.human.cornell.edu/people_keith.htm">Prof. Keith Green</a> of the Design + Environmental Analysis (DEA) department. I completed my undergrad degree in Information Science, Systems, & Technology also from Cornell. </p>
							<p>I'm interested in learning how technology can make design more accessible, useful, and exciting, especially in its applications to architecture and the built environment.</p>
						</Column>
						<Column width = "4">
							<h5><a href="https://www.linkedin.com/in/kevinlguo/">LinkedIn</a></h5>
							<h5><a href="https://drive.google.com/file/d/1A6l2PUh6bY0s7zW-LWEin3AzVglI4o_I/view?usp=sharing">Resume</a></h5>
							<h5>Email: kg344[at]cornell.edu</h5>
						</Column>
					</Row>
				</Page>
				<Page>
					<MediaQuery minWidth={550}>
						<Row>
							<h2><strong>Projects</strong></h2>
							<p>My research focuses on the applications of robotics in design. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.</p>
						</Row>
						<Row>
							<Tile project="crochetmatic" side="left"></Tile>
							<Tile project="roma" side="left"></Tile>
						</Row>
						<Row>
							<Tile project="communit" side="right"></Tile>
							<Tile project="cera" side="right"></Tile>
						</Row>
					</MediaQuery>
					<MediaQuery maxWidth={550}>
						<Row>
							<h1>Projects</h1>
							<p>My research focuses on the applications of robotics in design, especially in architecture. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.</p>
						</Row>
						<Row>
							<Tile project="crochetmatic" side="right"></Tile>
							<Tile project="roma" side="left"></Tile>
						</Row>
						<Row>
							<Tile project="communit" side="right"></Tile>
							<Tile project="cera" side="left"></Tile>
						</Row>
					</MediaQuery>
				</Page>
			</Container>
		);
	}
}

export default Home;
