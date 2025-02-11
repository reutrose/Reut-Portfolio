import ContactForm from "./ContactForm";

function ContactMe() {
	return (
		<>
			<div className="anchor" id="contact"></div>
			<div className="container-fluid bg-light">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-6 col-md-12 hidden d-flex justify-content-center align-items-center p-5">
						<img
							src="/images/bubbles.svg"
							alt="speak bubbles"
							width="100%"
							height="100%"
							style={{ maxWidth: "400px" }}
						/>
					</div>
					<div className="col-12 col-md-6 mt-5">
						<div
							className="container h-100 w-100 bg-light shadow rounded-4"
							style={{ maxWidth: "500px" }}
						>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactMe;
