import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import MouseHalo from "./components/MouseHalo";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<MouseHalo />
			<Router>
				<Navbar />
				<Header />
				<AboutMe />
				<Skills />
				<SectionDivider dividerType={"arrow"} />
				<Projects />
				<SectionDivider dividerType={"one-side"} />
				<ContactMe />
				<Footer />
			</Router>
		</>
	);
}

export default App;
