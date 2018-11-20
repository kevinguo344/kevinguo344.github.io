import React from 'react'
import "./style.css";

export class Page extends React.Component{
    render(){
        return(
			<div className = "pageView">
				{this.props.children}
			</div>
		)
    }
}

export default Page;