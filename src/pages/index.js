import React, { Component } from 'react';
import {Row, Column, Container} from '../components/skeleton.jsx';
import Tile from '../components/titlePiece.jsx';
import Page from '../components/pageView.jsx';
import MediaQuery from 'react-responsive';
import SEO from "../components/seo"
import {Helmet} from 'react-helmet';

class IndexPage extends Component {
	render() {
		return (
			<Container>
				<Helmet>
					<title>Kevin Guo: Home</title>
				</Helmet>
        		<SEO title="Home" />
				<Page>
					<Row>
						<Column width = "6">
							<h1><strong>Hi, I'm Kevin</strong></h1>
						</Column>
					</Row>
					<Row>
						<Column width = "8">
							<p>I'm a product engineer & designer at <a href="https://oriliving.com/"><strong>Ori Inc.</strong></a>, a robotic furniture company.</p>
							<p>I'm interested in learning how technology can make design more accessible, useful, and exciting, especially in its applications to architecture and the built environment.</p>
							<p>I studied at at <strong>Cornell University</strong> for a Masters of Engineering in Mechanical Engineering focusing on Robotics and Product Design and a BS in Information Science, Systems, & Technology (ISST). My advisor was <a href="https://arl.human.cornell.edu/people_keith.htm">Prof. Keith Green</a> of Design + Environmental Analysis (DEA) and I also worked with <a href = "http://www.jennysabin.com/">Prof. Jenny Sabin</a> of Architecture.</p>
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
							<Tile project="communit" side="left"></Tile>
							<Tile project="cera" side="left"></Tile>
						</Row>
						<Row>
							<Tile project="crochetmatic" side="right"></Tile>
							<Tile project="roma" side="right"></Tile>
						</Row>
						<Row>
							<Tile project="ori" side="left"></Tile>
							<Tile project="distopia" side="left"></Tile>
						</Row>
					</MediaQuery>
					<MediaQuery maxWidth={550}>
						<Row>
							<h1>Projects</h1>
							<p>My research focuses on the applications of robotics in design, especially in architecture. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.</p>
						</Row>
						<Row>
							<Tile project="communit" side="right"></Tile>
							<Tile project="cera" side="left"></Tile>
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

export default IndexPage;
