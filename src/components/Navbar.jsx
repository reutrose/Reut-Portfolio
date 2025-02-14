function Navbar() {
	return (
		<>
			<nav className="navbar fixed-top navbar-expand-lg bg-light p-2 fw-bold font-monospace">
				<div className="container-fluid">
					<a
						className="navbar-brand d-flex align-items-center gap-2"
						href="#top"
					>
						<img
							src="/images/profile-pic.png"
							alt="Profile"
							className="rounded-circle"
							width="50"
							height="50"
						/>
						<img
							src="/images/reut-rosenfeld.png"
							alt="Reut Rosenfeld"
							width="100"
							height="50"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100 uppercase align-items-center">
							<li className="nav-item me-4 text-center">
								<a
									className="nav-link text-dark"
									aria-current="page"
									href="#about"
								>
									About
								</a>
							</li>
							<li className="nav-item me-4 dropdown text-center">
								<a
									className="nav-link text-dark dropdown-toggle"
									to="/"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Projects
								</a>
								<ul className="dropdown-menu dropdown-menu-end">
									<li>
										<a className="dropdown-item" href="#html-css">
											HTML&CSS
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#javascript">
											JavaScript
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#react">
											React
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#nodejs">
											NodeJS
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item me-4 text-center">
								<a className="nav-link" href="#contact">
									<button
										type="button"
										className="btn btn-purple rounded-pill position-relative"
									>
										<i className="bi bi-chat-dots-fill"></i>
									</button>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
