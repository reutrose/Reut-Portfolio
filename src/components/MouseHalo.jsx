import { useState, useEffect } from "react";

const MouseHalo = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", updatePosition);
		return () => window.removeEventListener("mousemove", updatePosition);
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				left: position.x - 100, // Center the halo
				top: position.y - 100,
				width: "200px",
				height: "200px",
				background:
					"radial-gradient(circle, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0) 70%)",
				pointerEvents: "none",
				borderRadius: "50%",
				zIndex: 9999,
				filter: "blur(30px)",
				transition: "transform 0.1s ease-out",
			}}
		/>
	);
};

export default MouseHalo;
