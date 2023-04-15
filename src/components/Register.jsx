import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
	};

	return (
		<div className="hero">
			<div className="hero-content flex-col">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Please Register!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="name"
								required
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								required
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								required
								className="input input-bordered"
							/>
							<label className="label">
								<Link to="/login" className="label-text-alt link link-hover">
									Already a user? Sign In
								</Link>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">RegisterS</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;