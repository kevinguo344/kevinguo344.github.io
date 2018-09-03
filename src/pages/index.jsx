import React from "react";
import Link from "gatsby-link";
import PageView from "../components/page-view";
import Screen from "../components/screen";
import ScreenSection from "../components/screen-section";
import Styles from "../style/styles.scss";

export default () =>
	<PageView>
		<h1>Hi, I'm Kevin</h1>
		<h1>This is my website</h1>
		<h1>I'm a designer, programmer, and engineer</h1>
		<h1>My goal is to break UX from the screen...</h1>
		<h1>...and into the world.</h1>
		<h1>I'm interested in the intersection of the physical and the digital, in the confluence of design, technology, and things that don't mix with either.</h1>
		<h1>I want to build the novel</h1>
		<div>
			<Link to="/projects">See my Projects</Link>
		</div>
		<Screen>
			<ScreenSection></ScreenSection>
			<ScreenSection></ScreenSection>
			<ScreenSection></ScreenSection>
		</Screen>
	</PageView>
