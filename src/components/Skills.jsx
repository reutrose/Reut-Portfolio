import "../style/skills.css";

const skills = [
	{ name: "WordPress", logo: "/logos/wordpress.svg" },
	{ name: "HTML", logo: "/logos/html.svg" },
	{ name: "CSS", logo: "/logos/css.svg" },
	{ name: "SASS", logo: "/logos/sass.svg" },
	{ name: "Bootstrap", logo: "/logos/bootstrap.svg" },
	{ name: "JavaScript", logo: "/logos/javascript.svg" },
	{ name: "React", logo: "/logos/react.svg" },
	{ name: "SQL | NoSQL", logo: "/logos/sql.svg" },
	{ name: "MongoDB", logo: "/logos/mongodb.svg" },
	{ name: "Node.js", logo: "/logos/nodejs.svg" },
	{ name: "Python", logo: "/logos/python.svg" },
	{ name: "Django", logo: "/logos/django.svg" },
];

const languages = [
	{ name: "Hebrew", logo: "/logos/israel.svg", level: "Native" },
	{ name: "English", logo: "/logos/usa.svg", level: "The Bestest" },
];

function Skills() {
	return (
		<div className="container my-5">
			<h4 className="text-center mb-4 font-caveat-brush text-purple fw-bold">
				I&apos;m Fluent in Geek Speak :
			</h4>
			<div className="row justify-content-center">
				{skills.map((skill, index) => (
					<div key={index} className="col-6 col-sm-4 col-md-3 col-xl-2 mb-2">
						<div className="row p-1">
							<div className="col-4 align-items-center justify-content-center d-flex">
								<img
									src={skill.logo}
									alt={`${skill.name} Logo`}
									className="mx-auto"
									style={{ minWidth: "30px", maxHeight: "30px" }}
								/>
							</div>
							<div className="col-8 d-flex align-items-center">
								<h5 className="m-0 p-0 skill-name">{skill.name}</h5>
							</div>
						</div>
					</div>
				))}
			</div>
			<h5 className="text-center mb-4 font-caveat-brush text-purple fw-bold mt-4">
				And :
			</h5>
			<div className="row justify-content-center">
				{languages.map((language, index) => (
					<div
						key={index}
						className="col-md-3 mb-2 border rounded m-1 shadow-sm"
						style={{ maxWidth: "140px" }}
					>
						<div className="row p-1 d-flex justify-content-center align-items-center">
							<div className="col-4">
								<img
									src={language.logo}
									alt={`${language.name} Logo`}
									className="mx-auto"
									style={{ minWidth: "30px", maxHeight: "30px" }}
								/>
							</div>
							<div className="col-8">
								<h5 className="m-0 p-0 skill-name">{language.name}</h5>
								<h5 className="m-0 p-0 skill-lvl text-secondary">
									{language.level}
								</h5>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
