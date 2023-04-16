import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className="h-96 flex justify-center items-center">
				<progress className="progress w-56"></progress>
			</div>
		);
	}

	if (user) {
		return children;
	}
	return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
