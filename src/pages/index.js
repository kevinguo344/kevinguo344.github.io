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
			<Column width="half" offset="1" style={{"margin-top": "25%"}}>
				<h1>Hi, I'm Kevin</h1>
				<p>I'm currently a student Cornell University studying Information Science, Systems, & Technology. Next year, I will be pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics.</p>
				<p><strong>I want to make the built environment responsive with technology.</strong></p>
			</Column>
		</Row>
	</Container>
)

export default IndexPage
