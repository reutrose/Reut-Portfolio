import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/contact.css";

const ContactForm = () => {
	const formRef = useRef(null);
	const [contactMethod, setContactMethod] = useState("email");
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		contactMethod: Yup.string().required("Please select a contact method"),
		email:
			contactMethod === "email"
				? Yup.string()
						.email("Invalid email format")
						.required("Email is required")
				: Yup.string().notRequired(),
		phone:
			contactMethod === "phone"
				? Yup.string()
						.matches(/^[0-9]{9,15}$/, "Invalid phone number")
						.required("Phone number is required")
				: Yup.string().notRequired(),
		message: Yup.string().required("Message is required"),
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			contactMethod: "email",
			email: "",
			phone: "",
			message: "",
		},
		validationSchema,
		onSubmit: () => {
			if (formRef.current) {
				formRef.current.submit();
			}

			setTimeout(() => {
				window.location.reload();
			}, 1000);
		},
	});

	return (
		<div className="container-sm-12 pt-4 pb-4">
			<h2 className="mb-4 text-purple fw-bold font-inter">Contact Me</h2>
			<form
				ref={formRef}
				action="https://formsubmit.co/rosenfeldreut@gmail.com"
				method="POST"
				onSubmit={formik.handleSubmit}
			>
				<input type="hidden" name="_next" value={window.location.href} />
				<input type="hidden" name="_captcha" value="false" />
				<div className="form-floating">
					<input
						type="text"
						className={`form-control ${
							formik.touched.name && formik.errors.name ? "is-invalid" : ""
						}`}
						{...formik.getFieldProps("name")}
						id="name"
						name="name"
						placeholder="Your Name"
					/>
					<label htmlFor="name">Name</label>
				</div>
				<div className="error-space mb-2">
					{formik.touched.name && formik.errors.name}
				</div>

				{/* Preferred Contact Method */}
				<div className="form-floating mb-2">
					<select
						className="form-select"
						{...formik.getFieldProps("contactMethod")}
						onChange={(e) => {
							formik.handleChange(e);
							setContactMethod(e.target.value);
						}}
						id="contactMethod"
						name="contactMethod"
					>
						<option value="email">Email</option>
						<option value="phone">Phone</option>
					</select>
					<label htmlFor="contactMethod">Preferred Contact Method</label>
				</div>
				<div className="error-space">
					{formik.touched.contactMethod && formik.errors.contactMethod}
				</div>

				{/* Email Field (conditional) */}
				{contactMethod === "email" && (
					<>
						<div className="form-floating">
							<input
								type="email"
								className={`form-control ${
									formik.touched.email && formik.errors.email
										? "is-invalid"
										: ""
								}`}
								{...formik.getFieldProps("email")}
								id="email"
								name="email"
								placeholder="Your Email"
							/>
							<label htmlFor="email">Email</label>
						</div>
						<div className="error-space mb-2">
							{formik.touched.email && formik.errors.email}
						</div>
					</>
				)}

				{/* Phone Field (conditional) */}
				{contactMethod === "phone" && (
					<>
						<div className="form-floating">
							<input
								type="tel"
								className={`form-control ${
									formik.touched.phone && formik.errors.phone
										? "is-invalid"
										: ""
								}`}
								{...formik.getFieldProps("phone")}
								id="phone"
								name="phone"
								placeholder="Your Phone Number"
							/>
							<label htmlFor="phone">Phone</label>
						</div>
						<div className="error-space mb-2">
							{formik.touched.phone && formik.errors.phone}
						</div>
					</>
				)}

				{/* Message Field */}
				<div className="form-floating">
					<textarea
						className={`form-control ${
							formik.touched.message && formik.errors.message
								? "is-invalid"
								: ""
						}`}
						{...formik.getFieldProps("message")}
						id="message"
						name="message"
						placeholder="Your Message"
						style={{ height: "150px" }}
					></textarea>
					<label htmlFor="message">Message</label>
				</div>
				<div className="error-space mb-2">
					{formik.touched.message && formik.errors.message}
				</div>

				{/* Submit Button */}
				<button type="submit" className="btn btn-purple w-100">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
