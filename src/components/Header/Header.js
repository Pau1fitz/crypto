import React from 'react';
import logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div>
			<div className='header-container'>
				<Link to="/">
					<div className='logo-container'>
						<img className='logo' src={logo} />
						<h2 className='title'>Bitcoin News</h2>
					</div>
				</Link>
				<div className='header-menu'>
					<NavLink exact to="/" activeClassName="active">Home</NavLink>
					<NavLink to="/info" activeClassName="active">Info</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;
