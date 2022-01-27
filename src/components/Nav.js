import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<h1> Agenda </h1>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									<h3> Pacientes </h3>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/CreateContact">
									<h3>Crear Paciente</h3>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
