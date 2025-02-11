import "../style/header.css";

function Header() {
	return (
		<>
			<div className="header">
				<div className="header-background"></div>
				<div className="overlay"></div>
				<div className="header-content container w-75 font-smooch-sans">
					<h1 className="text-center text-white fw-bold">Reut Rosenfeld</h1>
					<h2 className="text-center text-white">Full-Stack Developer</h2>
				</div>
			</div>
		</>
	);
}

export default Header;
