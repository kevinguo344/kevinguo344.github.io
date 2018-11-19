import React from 'react'
import {Row, Column} from './skeleton.jsx';

export class Tile extends React.Component{
	constructor(props){
		super(props);
		this.title = this.props.title;
		this.side = this.props.side;
		this.image = this.props.image;
	}
	render(){
		
		return (
			<Row>
				<Column>

				</Column>
			</Row>
		)
	}
}