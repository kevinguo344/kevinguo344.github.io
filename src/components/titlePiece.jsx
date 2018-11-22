import React from 'react'
import {Column} from './skeleton.jsx';
import "./style.css";
import { Link } from 'react-router-dom';
export class Tile extends React.Component{
	constructor(props){
		super(props);
		this.project = projects[this.props.project];
		this.side = this.props.side;
	}
	render(){
		return (
			<Link to={"/" + this.project.link}>
				<Column width="6">
					<div className={"titleCard " + this.side}>
						<div className="titleContainer">
							<h2>{this.project.title}</h2>
							<h5>{this.project.sub}</h5>
						</div>
						<img className="background" src={this.project.img} alt={this.project.title}></img>
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
		img: "./assets/roma.svg"
	},
	crochetmatic: {
		title: "CrochetMatic",
		sub: "Knitting in 3D",
		link: "research/crochetmatic",
		img: "./assets/crochetmatic.svg"
	},
	distopia: {
		title: "Distopia",
		sub: "Build a Better Voting District",
		link: "research/distopia",
		img: "./assets/distopia.svg"
	},
	transform: {
		title: "transFORM",
		sub: "Responsive Public Environment",
		link: "research/transform",
		img: "./assets/transform.svg"
	},
	
	cuberpillar: {
		title: "Cuberpillar",
		sub: "Combining the geometric and organic",
		link: "designs/cuberpillar",
		img: "./assets/roma.png"
	},
	ocularmd: {
		title: "OcularMD",
		sub: "Letting the world see again",
		link: "designs/ocularmd",
		img: "./assets/roma.png"
	},
	ciac: {
		title: "CIAC VII",
		sub: "Bringing order to a messy brand",
		link: "designs/ciac",
		img: "./assets/roma.png"
	},
	lcl: {
		title: "Life Changing Labs",
		sub: "Giving startups a new beginning",
		link: "designs/lcl",
		img: "./assets/roma.png"
	},
	cornellems: {
		title: "Cornell EMS",
		sub: "Redefining an old stalwart",
		link: "designs/cornellems",
		img: "./assets/roma.png"
	}
}

export default Tile;