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
					<Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} />} />
					<Route exact path={`/research/roma`} render={ (routerProps) => < RoMA routerProps={routerProps} />} />
					<Route exact path={`/research/crochetmatic`} render={ (routerProps) => < CrochetMatic routerProps={routerProps} />} />
					<Route exact path={`/research/distopia`} render={ (routerProps) => < Distopia routerProps={routerProps} />} />
					<Route exact path={`/research/transform`} render={ (routerProps) => < TransForm routerProps={routerProps} />} />
					<Route exact path={`/research/polybrick`} render={ (routerProps) => < Polybrick routerProps={routerProps} />} />
					<Route exact path={`/designs/cuberpillar`} render={ (routerProps) => < Cuberpillar routerProps={routerProps} />} />
					<Route exact path={`/designs/ocularmd`} render={ (routerProps) => < OcularMD routerProps={routerProps} />} />
					<Route exact path={`/designs/ciac`} render={ (routerProps) => < CIAC routerProps={routerProps} />} />
					<Route exact path={`/designs/lcl`} render={ (routerProps) => < LCL routerProps={routerProps} />} />
					<Route exact path={`/designs/cornellems`} render={ (routerProps) => < CUEMS routerProps={routerProps} />} />
				</div>
			</Router>
		);
	}
}


//<Route exact path=`/research/roma` render={RoMA}></Route>
//<Route exact path=`/research/crochetmatic` component={CrochetMatic}></Route>
//<Route exact path=`/research/distopia` component={Distopia}></Route>
//<Route exact path=`/research/transform` component={TransForm}></Route>
//<Route exact path=`/research/polybrick` component={Polybrick}></Route>
//<Route exact path=`/designs/cuberpillar` render={Cuberpillar}></Route>
//<Route exact path=`/designs/ocularmd` component={OcularMD}></Route>
//<Route exact path=`/designs/ciac` component={CIAC}></Route>
//<Route exact path=`/designs/lcl` component={LCL}></Route>
//<Route exact path=`/designs/cornellems` component={CUEMS}></Route>

export default App;
