import React from 'react'
import Project from '../components/project.jsx';

export class RoMA extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="roma.md"></Project>
			</div>
		)
	}
}

export class CrochetMatic extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="crochetmatic.md"></Project>
			</div>
		)
	}
}

export class Distopia extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="distopia.md"></Project>
			</div>
		)
	}
}

export class TransForm extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="transform.md"></Project>
			</div>
		)
	}
}

export default Project;

