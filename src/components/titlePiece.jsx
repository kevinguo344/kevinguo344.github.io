import React from 'react'
import {Column} from './skeleton.jsx';
import "./style.css";
import { Link } from 'react-router-dom';

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
		link: "research/roma",
		img: "./assets/icons/roma.svg",
		color: "rgba(227,181,5,0.325)"
	},
	crochetmatic: {
		title: "CrochetMatic",
		sub: "Knitting in 3D",
		link: "research/crochetmatic",
		img: "./assets/icons/crochetmatic.svg",
		color: "rgba(219,80,74,0.325)"
	},
	distopia: {
		title: "Distopia",
		sub: "Build a Better Voting District",
		link: "research/distopia",
		img: "./assets/icons/distopia.svg",
		color: "rgba(138,201,38,0.325)"
	},
	communit: {
		title: "communIT",
		sub: "A Responsive Public Environment",
		link: "research/communit",
		img: "./assets/icons/transform.svg",
		color: "rgba(58,153,215,0.325)"
	},
	cera: {
		title: "CERA",
		sub: "Detailed extrusion at Architectural Scale",
		link: "research/cera",
		img: "./assets/icons/cera.svg",
		color: "rgba(138,201,38,0.325)"
	},
	ori:{
		title: "Ori",
		sub: "Robotic Interiors",
		link: "research/ori",
		img: "./assets/icons/ori.svg",
		color: "rgba(58,153,215,0.325)"
	},
	cuberpillar: {
		title: "Cuberpillar",
		sub: "Combining the geometric and organic",
		link: "designs/cuberpillar",
		img: "./assets/icons/cuberpillar.gif",
		color: "rgba(255,255,255,0)"
	},
	ocularmd: {
		title: "OcularMD",
		sub: "Letting the world see again",
		link: "designs/ocularmd",
		img: "./assets/icons/ocularmd_icon.png",
		color: "rgba(255,255,255,0)"
	},
	ciac: {
		title: "CIAC VII",
		sub: "Bringing order to a messy brand",
		link: "designs/ciac",
		img: "./assets/icons/ciac_icon.png",
		color: "rgba(255,255,255,0)"
	},
	lcl: {
		title: "Life Changing Labs",
		sub: "Giving startups a new beginning",
		link: "designs/lcl",
		img: "./assets/icons/lcl_icon.png",
		color: "rgba(255,255,255,0)"
	},
	cornellems: {
		title: "Cornell EMS",
		sub: "Redefining an old stalwart",
		link: "designs/cornellems",
		img: "./assets/icons/roma.png",
		color: "rgba(255,255,255,0)"
	}
}

export default Tile;