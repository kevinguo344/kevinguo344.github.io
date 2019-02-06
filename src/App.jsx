import React, { Component } from 'react';
import Home from './pages/home.jsx';
import {RoMA, CrochetMatic, Distopia, TransForm, Polybrick} from './pages/research.jsx';
import {Cuberpillar, OcularMD, CIAC, LCL, CUEMS} from './pages/designs.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path ="/" component={Home}></Route>
					<Route exact path="/research/roma" render={RoMA}></Route>
					<Route exact path="/research/crochetmatic" component={CrochetMatic}></Route>
					<Route exact path="/research/distopia" component={Distopia}></Route>
					<Route exact path="/research/transform" component={TransForm}></Route>
					<Route exact path="/research/polybrick" component={Polybrick}></Route>
					<Route exact path="/designs/cuberpillar" render={Cuberpillar}></Route>
					<Route exact path="/designs/ocularmd" component={OcularMD}></Route>
					<Route exact path="/designs/ciac" component={CIAC}></Route>
					<Route exact path="/designs/lcl" component={LCL}></Route>
					<Route exact path="/designs/cuems" component={CUEMS}></Route>
				</div>
			</Router>
		);
	}
}
//Markdown example from https://github.com/rahrang/react-markdown-example

export default App;
