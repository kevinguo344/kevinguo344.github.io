import React from 'react'
import Project from '../components/project.jsx';

export class RoMA extends React.Component{
	constructor(props){
		super(props);
		console.log(this);
	}
	render() {
		return ( <Project markdown="roma.md"></Project> )
	}
}

export class CrochetMatic extends React.Component{
	render() {
		return ( <Project markdown="crochetmatic.md"></Project> )
	}
}

export class Distopia extends React.Component{
	render() {
		return ( <Project markdown="distopia.md"></Project> )
	}
}

export class TransForm extends React.Component{
	render() {
		return ( <Project markdown="transform.md"></Project> )
	}
}

export default Project;

