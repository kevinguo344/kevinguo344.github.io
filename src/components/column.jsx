import React from 'react'

import './skeleton.css'
import './normalize.css'

const titleCard = {
	marginTop: "25%"
}

export class Column extends React.Component{
	constructor(props){
		super(props);

		this.width = this.stringToNum(this.props.width)
		if(this.width != null){ this.width += " columns"; }
		else{ this.width = "column"; }

		this.offset = this.stringToNum(this.props.offset);
		if(this.offset != null){ this.offset =  " offset-by-" + this.offset; }
		else{ this.offset = ""; }

		if(this.props.title === "true"){ this.style = titleCard; }
	}
	stringToNum(w){
		let a;
		switch(w){
			case "":
				a = null; break;
			case "1/2":
				a = "half"; break;
			case "1/3":
				a = "one-third"; break;
			case "2/3":
				a = "two-thirds"; break;
			case "1":
				a = "one"; break;
			case "2":
				a = "two"; break;
			case "3":
				a = "three"; break;
			case "4":
				a = "four"; break;
			case "5":
				a = "five"; break;
			case "6":
				a = "six"; break;
			case "7":
				a = "seven"; break;
			case "8":
				a = "eight"; break;
			case "9":
				a = "nine"; break;
			case "10":
				a = "ten"; break;
			case "11":
				a = "eleven"; break;
			case "12":
				a = "twelve"; break;
			default:
				a = null; break;
		}
		return a;
	}
	render(){
        return(
			<div className = {this.width + this.offset} style={this.style}>
				{this.props.children}
			</div>
		)
    }
}

export default Column
