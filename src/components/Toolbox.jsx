import "../style/toolbox.css";

function Toolbox() {
	return (
		<>
			<div className="container-fluid">
				<div className="toolbox-box d-flex justify-content-center align-items-center">
					<img
						src="/images/laptop-code.svg"
						alt="Tool Icon"
						className="tool-icon"
					/>
					<h2 className="fw-bold text-dark">
						{" "}
						<span className="text-gray">&lt;</span> My Toolbox{" "}
						<span className="text-gray">/&gt;</span>
					</h2>{" "}
					<div className="divider mt-2 mb-4"></div>
					<div className="row container-fluid d-flex justify-content-center">
						<div className="tool col">WordPress</div>
						<div className="tool col">HTML</div>
					</div>
					<div className="row container-fluid d-flex justify-content-center">
						<div className="tool col">CSS</div>
						<div className="tool col">SASS</div>
					</div>
					<div className="row container-fluid d-flex justify-content-center">
						<div className="tool col">Bootstrap</div>
						<div className="tool col">JavaScript</div>
					</div>
					<div className="row container-fluid d-flex justify-content-center">
						<div className="tool col">React</div>
						<div className="tool col">NodeJS</div>
					</div>
					<div className="row container-fluid d-flex justify-content-center">
						<div className="tool col">SQL</div>
						<div className="tool col">NoSQL</div>
					</div>
					<div className="row container-fluid d-flex justify-content-center">
						<div className="tool col">Python</div>
						<div className="tool col">django</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Toolbox;
