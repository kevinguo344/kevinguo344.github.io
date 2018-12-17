import React from 'react'
import "./style.css";

export class Page extends React.Component{
    render(){
        return(
			<div className = "pageView">
				<div className = "pageContainer">
					{this.props.children}
				</div>
			</div>
		)
    }
}

export default Page;