import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
	return (
		<div>
			<div className='header-container'>
				<Link to="/">
					<div className='logo-container'>
						<div className='circle-logo' />
						<h2 className='title'>Bitcoin News</h2>
					</div>
				</Link>
				<div className='header-menu'>
					<NavLink exact to="/" activeClassName="active">Home</NavLink>
					<NavLink to="/graph" activeClassName="active">Graph</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;
