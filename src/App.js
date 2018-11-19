import React, { Component } from 'react';
import './App.css';
import {Row} from './components/row.js';
import {Column} from './components/column.js';
import {Container} from './components/container.js';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

const mdFile = require('./markdown/test.md');

class App extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Column width = "6" style={{"margin-top": "25%"}}>
						<h1><strong>Hi, I'm Kevin</strong></h1>
						<p>I'm currently a student Cornell University studying Information Science, Systems, & Technology.</p>
						<p>Next year, I will be pursuing a Masters of Engineering in Mechanical Engineering focusing on Architectural Robotics.</p>
						<h5><strong>I want to make the built environment responsive through technology.</strong></h5>
					</Column>
				</Row>
				<Markdown options={options}>
					{mdFile}
				</Markdown>
			</Container>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example
const MainTitle = styled.h1`
  color: #2980b9;
  border-bottom: 3px solid #333;
`

const SectionTitle = styled.h2`
  color: #895fad;
  border-bottom: 2px dashed #333;
  text-align: right;
  margin: 0 20px;
`

const SubSectionTitle = styled.h3`
  color: #2980b9;
  text-transform: uppercase;
`

const ParaText = styled.p`
  color: green;
  text-align: left;
  margin: 0 20px;
  line-height: 1.375rem;
`

const StrongText = styled.strong`
  color: black;
  padding: 2px;
  text-decoration: underline;
`

const ExtLink = styled.a.attrs({
  target: '_blank'
})`
  color: #2980b9;
  &:hover {
    color: #ffd700;
  }
`

const Code = styled.code`
  color: red;
  font-size: 1.125rem;
`

const DividerLine = styled.hr`
  border: 1px solid #2980b9;
`

const Image = styled.img`
  border: 5px solid #895fad;
  border-left: none;
  border-right: none;
`
const options = {
    overrides: {
        h1: {
            component: MainTitle
        },
        h2: {
            component: SectionTitle
        },
        h3: {
            component: SubSectionTitle
        },
        p: {
            component: ParaText
        },
        strong: {
            component: StrongText
        },
        a: {
            component: ExtLink
        },
        code: {
            component: Code
        },
        img: {
            component: Image
        },
        hr: {
            component: DividerLine
        }
    }
}

export default App;
