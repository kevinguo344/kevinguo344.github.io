import React from 'react'
//import { Link } from 'gatsby'
import Row from '../components/row'
import Container from '../components/container'
import Column from '../components/column'

import '../components/normalize.css'
import '../components/skeleton.css'

const IndexPage = () => (
	<Container>
		<Row>
			<Column title = "true">
				<h1><strong>Hi, I'm Kevin</strong></h1>
			</Column>
		</Row>
		<Row>
			<Column width = "6">
				<p>I'm currently a student Cornell University studying Information Science, Systems, & Technology.</p>
			</Column>
			<Column width = "6">
				<p>Next year, I will be pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics.</p>
			</Column>
		</Row>
		<Row>
			<Column width = "1/2">
				<h5><strong>I want to make the built environment responsive through technology.</strong></h5>
			</Column>
		</Row>
		<Row>
			<Column width = "12">
				<h1><strong>Design Work</strong></h1>
			</Column>
		</Row>
		<Row>
			<Column width = "4">
				<h4>RoMA</h4>
				<h5>Robotic Modelling Assistant</h5>
			</Column>
			<Column width = "4">
				<h4>CrochetMatic</h4>
				<h5>A New Way to Build</h5>
			</Column>
			<Column width = "4">
				<h4>Cuberpillar</h4>
				<h5>Geometric & Organic</h5>
			</Column>
		</Row>
		<Row>
			<Column width = "4">
				<h4>RoMA</h4>
				<h5>Robotic Modelling Assistant</h5>
			</Column>
			<Column width = "4">
				<h4>CrochetMatic</h4>
				<h5>A New Way to Build</h5>
			</Column>
			<Column width = "4">
				<h4>Cuberpillar</h4>
				<h5>Geometric & Organic</h5>
			</Column>
		</Row>
		<Row>
			<Column width = "1/2">
				<h5><strong>I want to make the built environment responsive through technology.</strong></h5>
			</Column>
		</Row>
	</Container>
)

export default IndexPage
