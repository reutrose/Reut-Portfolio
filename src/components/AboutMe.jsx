import { Link } from "react-router-dom";
import "../style/about.css";

const HackerU = (
	<img
		src="/images/hacker.u.png"
		alt="HackerU"
		className="mb-1"
		width="72"
		height="13"
	/>
);

function AboutMe() {
	return (
		<>
			<div className="anchor" id="about"></div>
			<div className="container-fluid p-0 m-0">
				<div className="row m-0 p-0 ">
					<div className="col-lg-8 mt-5 mb-5 px-4">
						<div className="about-me-box font-inter">
							<h3 className="fw-bold text-purple">Knock Knock!</h3>
							<h3 className="fw-bold text-dark">Who&apos;s There?</h3>
							<h3 className="fw-bold text-purple">It&apos;s Me!</h3>
							<div className="divider"></div>
							<p className="mt-2 lh-lg about-me-content">
								Hi, I&apos;m Reut Rosenfeld. After 10 years in the field of
								National Security, I recently embarked on a career shift. These
								days, I&apos;m a{" "}
								<span className="fw-bold">
									Full-Stack Web Development student
								</span>{" "}
								in <span>{HackerU}</span> College, and I&apos;m eagerly
								acquiring the skills to build and innovate in the exciting world
								of web development. For me, every line of code and every pixel
								placed, are a few steps closer to bringing a vision to life. My
								goal is to build not just websites, but digital ecosystems, and
								transform digital concepts into tangible realities.
							</p>
							<div className="container-fluid p-0 m-0 fs-3">
								<Link
									className="text-dark"
									to="https://github.com/reutrose"
									target="_blank"
								>
									<i className="fa-brands fa-square-github mx-1"></i>
								</Link>
								<Link
									className="text-dark"
									to="https://www.linkedin.com/in/reut-rosenfeld/"
									target="_blank"
								>
									<i className="fa-brands fa-linkedin mx-1"></i>
								</Link>
								<Link
									className="text-dark"
									to="https://www.instagram.com/reutrose/"
									target="_blank"
								>
									<i className="fa-brands fa-square-instagram mx-1"></i>
								</Link>
							</div>
							<div className="container-fluid p-0 m-0 fs-3">
								<a
									className="btn btn-purple font-nunito m-0"
									href="/documents/ReutRosenfeld-Full-StackDeveloper.pdf"
									target="_blank"
								>
									View My Resume <i className="fa-solid fa-circle-down"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 m-0 p-0 px-5 mb-4 text-purple d-flex justify-content-center align-items-center">
						<img src="/images/profile-pic.svg" className="profile-pic" alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutMe;
