import React from 'react'
import {Column} from './skeleton.jsx';
import { Link } from 'gatsby';

export class Tile extends React.Component{
	constructor(props){
		super(props);
		this.project = projects[this.props.project];
		this.side = this.props.side;
		this.style = {
			background: "linear-gradient(to bottom," + this.project.color + "," + this.project.color + "), linear-gradient(to bottom, rgba(255,255,255,0.45),rgba(255,255,255,0.45)), url(" + this.project.img + ")",
			backgroundSize: "cover"
		}
	}
	render(){
		return (
			<Link to={"/" + this.project.link}>
				<Column width="6">
					<div className={"titleCard " + this.side}>
						<div className="titleContainer">
							<h2>{this.project.title}</h2>
							<h6>{this.project.sub}</h6>
						</div>
						<div className="background" style={this.style}></div>
					</div>
				</Column>
			</Link>
		)
	}
}

let projects = {
	roma: {
		title: "RoMA",
		sub: "Interactive Fabrication in AR",
		link: "projects/roma",
		img: "./roma.svg",
		color: "rgba(227,181,5,0.325)"
	},
	crochetmatic: {
		title: "CrochetMatic",
		sub: "Knitting in 3D",
		link: "projects/crochetmatic",
		img: "./crochetmatic.svg",
		color: "rgba(219,80,74,0.325)"
	},
	distopia: {
		title: "Distopia",
		sub: "Build a Better Voting District",
		link: "projects/distopia",
		img: "./distopia.svg",
		color: "rgba(138,201,38,0.325)"
	},
	communit: {
		title: "communIT",
		sub: "A Responsive Public Environment",
		link: "projects/communit",
		img: "./communit.svg",
		color: "rgba(58,153,215,0.325)"
	},
	cera: {
		title: "CERA",
		sub: "Detailed extrusion at Architectural Scale",
		link: "projects/cera",
		img: "./cera.svg",
		color: "rgba(138,201,38,0.325)"
	},
	ori:{
		title: "Ori",
		sub: "Robotic Interiors",
		link: "projects/ori",
		img: "./ori.svg",
		color: "rgba(58,153,215,0.325)"
	}
}

export default Tile;