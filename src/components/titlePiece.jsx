import React from 'react'
import {Column} from './skeleton.jsx';
import "./style.css";

export class Tile extends React.Component{
	constructor(props){
		super(props);
		this.title = this.props.title;
		this.subtitle = this.props.subtitle;
		this.side = this.props.side;
	}
	render(){
		return (
			<Column width="6">
				<div className={"titleCard " + this.side}>
					<div className="titleContainer">
						<h2>{this.title}</h2>
						<h5>{this.subtitle}</h5>
					</div>
					<div className="background"></div>
				</div>
			</Column>
		)
	}
}

export default Tile;