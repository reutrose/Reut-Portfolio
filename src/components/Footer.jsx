import { Link } from "react-router-dom";
import "../style/footer.css";

function Footer() {
	return (
		<>
			<div className="container-fluid p-0 pt-5 bg-light">
				<footer className="footer-custom d-flex justify-content-center align-items-end">
					<div className="container d-flex col justify-content-center text-center m-0 p-0 py-4">
						<div className="container-fluid">
							<div className="container-fluid p-0 m-0 text-center display-6">
								<Link
									className="text-light"
									to="https://github.com/reutrose"
									target="_blank"
								>
									<i className="fa-brands fa-square-github mx-1"></i>
								</Link>
								<Link
									className="text-light"
									to="https://www.linkedin.com/in/reut-rosenfeld/"
									target="_blank"
								>
									<i className="fa-brands fa-linkedin mx-1"></i>
								</Link>
								<Link
									className="text-light"
									to="https://www.instagram.com/reutrose/"
									target="_blank"
								>
									<i className="fa-brands fa-square-instagram mx-1"></i>
								</Link>
							</div>
							<div className="row-12">
								<p className="m-0 p-0 text-white row-12 rights">
									All rights reserved | © 2025 Reut Rosenfeld
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Footer;
