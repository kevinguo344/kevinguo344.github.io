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
							<h5>{this.project.sub}</h5>
							<p>{this.project.location}</p>
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
		location: "Design Lab",
		link: "projects/roma",
		img: "../icons/roma.svg",
		color: "rgba(227,181,5,0.325)"
	},
	crochetmatic: {
		title: "CrochetMatic",
		sub: "Knitting in 3D",
		location: "Design Lab",
		link: "projects/crochetmatic",
		img: "../icons/crochetmatic.svg",
		color: "rgba(219,80,74,0.325)"
	},
	/*distopia: {
		title: "Distopia",
		sub: "Build a Better Voting District",
		link: "projects/distopia",
		img: "./assets/icons/distopia.svg",
		color: "rgba(138,201,38,0.325)"
	},*/
	communit: {
		title: "communIT",
		sub: "A Responsive Public Environment",
		location: "Architectural Robotics Lab",
		link: "projects/communit",
		img: "../icons/communit.svg",
		color: "rgba(58,153,215,0.325)"
	},
	cera: {
		title: "CERA",
		sub: "Detailed extrusion at Architectural Scale",
		location: "Jenny Sabin Lab",
		link: "projects/cera",
		img: "../icons/cera.svg",
		color: "rgba(138,201,38,0.325)"
	},
	ori:{
		title: "Design Assist",
		sub: "Robotic Interiors",
		location: "Ori Inc.",
		link: "projects/ori",
		img: "../icons/ori.svg",
		color: "rgba(58,153,215,0.325)"
	}
}

export default Tile;