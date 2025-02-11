import "../style/SectionDivider.css";
import PropTypes from "prop-types";

function SectionDivider({ dividerType }) {
	return (
		<>
			{dividerType === "arrow" && (
				<div className="container-fluid bg-purple p-0 divider-container-arrow">
					<div className="arrow-divider"></div>
				</div>
			)}
			{dividerType === "one-side" && (
				<div className="container-fluid bg-light p-0 divider-container-side">
					<div className="one-side-divider"></div>
				</div>
			)}
			{dividerType === "sep" && <div className="sep-divider"></div>}
		</>
	);
}

SectionDivider.propTypes = {
	dividerType: PropTypes.string,
};

export default SectionDivider;
