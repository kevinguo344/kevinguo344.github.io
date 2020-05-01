import React, { Component } from 'react';
import Home from './pages/home.jsx';
import {RoMA, CrochetMatic, Distopia, CommunIT, Cera, Ori} from './pages/research.jsx';
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
					<Route exact path={`/research/communit`} render={ (routerProps) => < CommunIT routerProps={routerProps} />} />
					<Route exact path={`/research/cera`} render={ (routerProps) => < Cera routerProps={routerProps} />} />
					<Route exact path={`/research/ori`} render={ (routerProps) => < Ori routerProps={routerProps} />} />
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
