import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/projectCard.css";

function Card({
	academic,
	projectImage,
	projectTitle,
	projectDescription,
	gitLink,
	savePath,
	viewLink,
}) {
	return (
		<>
			<div className="project-card shadow rounded bg-light container d-flex flex-column justify-content-between p-0 card-border">
				<div className="academic-declare col-12 text-center m-0 p-0 mb-2 mt-2">
					{academic ? (
						<i className="fa-solid fa-graduation-cap"></i>
					) : (
						<i className="fa-solid fa-circle-check"></i>
					)}
				</div>
				<div className="m-0 p-0 shadow-sm w-100">
					<img
						src={projectImage}
						alt="Project's Screenshot"
						className="w-100"
					/>
				</div>
				<div className="container d-flex flex-column justify-content-between p-0 h-75">
					<div className="project-title text-purple fw-bold font-inter text-center mt-4">
						<h6>{projectTitle}</h6>
					</div>
					<div className="project-description m-3">
						<small>{projectDescription}</small>
					</div>
				</div>
				<div className="project-buttons row">
					{gitLink && (
						<Link
							className="project-button col text-center m-0 p-0"
							to={gitLink}
							target="_blank"
						>
							<button className="git-button bg-light m-1">
								<img src="/images/git-button.svg" alt="git-icon" />
							</button>
						</Link>
					)}
					{savePath && (
						<a
							className="project-button col text-center m-0 p-0"
							href={savePath}
							download
						>
							<button className="save-button bg-light m-1">
								<img src="/images/save-button.svg" alt="save-icon" />
							</button>
						</a>
					)}
					{viewLink && (
						<Link
							className="project-button col text-center m-0 p-0"
							to={viewLink}
							target="_blank"
						>
							<button className="view-button bg-light m-1">
								<img src="/images/view-button.svg" alt="view-icon" />
							</button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
}

Card.propTypes = {
	academic: PropTypes.bool.isRequired,
	projectImage: PropTypes.string.isRequired,
	projectTitle: PropTypes.string.isRequired,
	projectDescription: PropTypes.string.isRequired,
	gitLink: PropTypes.string.isRequired,
	savePath: PropTypes.string.isRequired,
	viewLink: PropTypes.string.isRequired,
};

export default Card;
