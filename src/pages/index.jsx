import React from "react";
import Link from "gatsby-link";
import PageView from "../components/page-view";
import Screen from "../components/screen";
import ScreenSection from "../components/screen-section";
import Styles from "../style/styles.scss";

export default () =>
	<div>
		<PageView>
			<div className="titlecard center">
				<h1>Hi, I'm Kevin</h1>
				<h1>This is my website</h1>
			</div>
		</PageView>
		<PageView>
			<div className="titlecard top">
				<h1>I'm a...</h1>
				<h2>designer</h2>
				<h2>programmer</h2>
				<h2>engineer</h2>
			</div>
		</PageView>
		<PageView>
			<div className="titlecard center left">
				<h1>I work in the intersection of the physical and digital</h1>
			</div>
		</PageView>
		<PageView>
			<div className="titlecard center right">
				<h1>I'm interested in the merging of design, technology, and things unrelated</h1>
			</div>
		</PageView>
		<PageView>
			<div className="titlecard top">
				<h1>See my work here</h1>
			</div>
			<div>
				<Link to="/projects">See my Projects</Link>
			</div>
		</PageView>
			
	</div>
