import "../style/projects.css";
import HTMLCSSProjects from "./HTMLCSSProjects";
import JavaScriptProjects from "./JavaScriptProjects";
import NodeJSProjects from "./NodeJSProjects";
import ReactProjects from "./ReactProjects";
import SectionDivider from "./SectionDivider";

function Projects() {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center bg-purple projects-container">
				<div className="container bg-light rounded-3 pt-5 mb-5 pb-5">
					<div className="col">
						<div className="col-sm-12 projects-header">
							<h2 className="text-light bg-purple">Projects</h2>
						</div>
						<HTMLCSSProjects />
						<SectionDivider dividerType={"sep"} />
						<JavaScriptProjects />
						<SectionDivider dividerType={"sep"} />
						<ReactProjects />
						<SectionDivider dividerType={"sep"} />
						<NodeJSProjects />
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
