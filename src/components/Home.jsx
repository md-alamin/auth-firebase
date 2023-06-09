import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
	return (
		<div className="hero flex items-center h-96 mt-10 bg-base-200 px-20">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="https://www.nokia.com/sites/default/files/2022-01/cybersecurity4.jpg"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">Box Office News!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
