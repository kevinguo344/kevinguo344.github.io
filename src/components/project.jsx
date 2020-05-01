import React, { Component } from 'react';
import {Row, Column, Container} from './skeleton.jsx';
import Navbar from './navbar.jsx';
import ReactMarkdown from 'react-markdown';
import Sources from './sourcesIndex.jsx';
import "./style.css";
class Project extends Component {
	constructor(props){
		super(props);
		this.state = {
			markdown:'',
			path: Sources[this.props.name]
		}
	}
	componentDidMount(){
		fetch(this.state.path)
			.then(res => res.text())
			.then(text => this.setState({markdown: text}));
	}
	render() {
		return(
			<Container> 
				<Navbar></Navbar>
				<Row>
					<Column className="projects" width="10" offset="1">
						<ReactMarkdown
							source={this.state.markdown} 
							escapeHtml={false} 
						/>

					</Column>
				</Row>
			</Container>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example

export default Project;
