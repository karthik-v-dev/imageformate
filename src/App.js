import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// IMPORTING ALL CHILD COMPONNETS
import MOUNTAINS from './MainBody/mountains.js';
import BEACHES from './MainBody/beaches.js';
import BIRDS from './MainBody/birds.js';
import FOOD from './MainBody/food.js';
class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='Main'>
					<div class='wrap'>
						<div class='search'>
							<input
								type='text'
								className='searchTerm'
								Placeholder='Search....'
								name='q'
								arial-label='search'
							/>
							<button
								type='submit'
								className='searchButton'
								// onClick={this.state.popup}
							>
								<img
									src={require('./search.png')}
									className='icon'
								/>
							</button>
						</div>
					</div>

					<div className='Navigation '>
						{' '}
						{/* NAVIGATION LINKS UNDER UL TAG  */}
						<ul>
							<li>
								{' '}
								<Link className='' to='/'>
									Mountains{' '}
								</Link>
							</li>
							<li>
								{' '}
								<Link className='' to='/beaches'>
									Beaches
								</Link>
							</li>
							<li>
								{' '}
								<Link className='' to='/birds'>
									Birds
								</Link>
							</li>
							<li>
								{' '}
								<Link className='' to='/food'>
									Food
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<Switch>
					{/* RENDER FUNCTIONS  */}
					<Route path='/' exact component={Mountains} />
					<Route path='/beaches' exact component={Beaches} />
					<Route path='/birds' exact component={Birds} />
					<Route path='/food' exact component={Food} />
				</Switch>
			</Router>
		);
	}
}
export default App;
// INVOKE FUNCTION WHEN CLICK LINK
const Mountains = () => (
	<Fragment>
		<MOUNTAINS />
	</Fragment>
);
const Birds = () => (
	<Fragment>
		<BIRDS />
	</Fragment>
);
const Beaches = () => (
	<Fragment>
		<BEACHES />
	</Fragment>
);
const Food = () => (
	<Fragment>
		<FOOD />
	</Fragment>
);
