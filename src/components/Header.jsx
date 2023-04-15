import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="navbar bg-primary text-primary-content">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">My Auth</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-3 flex gap-3">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register">Register</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default Header;
