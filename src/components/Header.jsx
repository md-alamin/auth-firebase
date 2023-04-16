import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((e) => console.log(e));
	};

	return (
		<div className="navbar bg-primary text-primary-content">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					My Auth
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-3 flex gap-3">
					{user ? (
						<>
							<NavLink onClick={handleLogOut}>Log Out</NavLink>
							<p>{user.email}</p>
						</>
					) : (
						<></>
					)}
					<NavLink to="/">Home</NavLink>
					<NavLink to="/orders">Orders</NavLink>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register">Register</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default Header;
