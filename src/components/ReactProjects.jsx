import { useState } from "react";
import Card from "./Card";
import { reactProjects } from "../utils/projectsArrays";

function ReactProjects() {
	let [display, setDisplay] = useState(0);
	const projects = reactProjects;

	const changeDisplay = () => {
		setDisplay((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
	};
	return (
		<>
			<div className="anchor" id="react"></div>
			<div className="row">
				<h3 className="col-md-2 d-flex justify-content-center align-items-center text-purple font-caveat-brush">
					React
				</h3>
				<div className="col-sm-12 col-md-9">
					<div className="row w-100 p-0 m-0 d-flex justify-content-center">
						{projects.length > 2
							? [...projects.slice(display, display + 2), ...projects]
									.slice(0, 2)
									.map((project, index) => (
										<div
											key={index}
											className="col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
										>
											<Card
												academic={project.academic}
												projectImage={project.projectImage}
												projectTitle={project.title}
												projectDescription={project.projectDescription}
												gitLink={project.gitLink}
												savePath={project.savePath}
												viewLink={project.viewLink}
											/>
										</div>
									))
							: projects.map((project, index) => (
									<div
										key={index}
										className="col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
									>
										<Card
											academic={project.academic}
											projectImage={project.projectImage}
											projectTitle={project.title}
											projectDescription={project.projectDescription}
											gitLink={project.gitLink}
											savePath={project.savePath}
											viewLink={project.viewLink}
										/>
									</div>
							  ))}
					</div>
				</div>
				<div className="col-md-1 d-flex justify-content-center align-items-center">
					{projects.length >= 2 && (
						<button
							className="btn btn-purple rounded border-0 p-2 w-100 mt-4 mb-4 btn-more"
							onClick={changeDisplay}
						>
							<i className="fa-solid fa-angles-right"></i>
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default ReactProjects;
