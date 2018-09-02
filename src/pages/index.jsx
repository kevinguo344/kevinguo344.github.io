import React from "react";
import Link from "gatsby-link";

export default () =>
	<div>
		<h1>Hi, I'm Kevin</h1>
		<p>Here's what I build</p>
		<div>
			<Link to="/projects">Link</Link>
		</div>
		<div>
			<Link to="/counter/">Counter</Link>
		</div>
	</div>
