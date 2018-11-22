import React, { Component } from 'react';
import Home from './pages/home.jsx';
import {RoMA, CrochetMatic, Distopia, TransForm} from './pages/research.jsx';
import {Cuberpillar, OcularMD, CIAC, LCL, CUEMS} from './pages/designs.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path ="/" component={Home}></Route>
					<Route path="research/roma" component={RoMA}></Route>
					<Route path="research/crochetmatic" component={CrochetMatic}></Route>
					<Route path="research/distopia" component={Distopia}></Route>
					<Route path="research/transform" component={TransForm}></Route>
					<Route path="designs/cuberpillar" component={Cuberpillar}></Route>
					<Route path="designs/ocularmd" component={OcularMD}></Route>
					<Route path="designs/ciac" component={CIAC}></Route>
					<Route path="designs/lcl" component={LCL}></Route>
					<Route path="designs/cornellems" component={CUEMS}></Route>
				</div>
			</Router>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example

export default App;
