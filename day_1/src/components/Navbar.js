import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						DAY #1
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Form
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/blogs">
									Blogs
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/dashboard">
									Dashboard
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
