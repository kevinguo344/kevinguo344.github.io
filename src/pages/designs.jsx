import React from 'react'
import Project from '../components/project.jsx';

export class Cuberpillar extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="roma.md"></Project>
			</div>
		)
	}
}

export class OcularMD extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="crochetmatic.md"></Project>
			</div>
		)
	}
}

export class CIAC extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="distopia.md"></Project>
			</div>
		)
	}
}

export class LCL extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="transform.md"></Project>
			</div>
		)
	}
}

export class CUEMS extends React.Component{
	render() {
		return (
			<div>
				<Project mdFile="transform.md"></Project>
			</div>
		)
	}
}
export default Project;

