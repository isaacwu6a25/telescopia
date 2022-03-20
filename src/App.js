import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import GEMProject from "./components/pages/GEMProject";
import Contact from "./components/pages/Contact";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="App-header">
					<Navbar />
				</div>
				<div className="Content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about-us" element={<About />} />
						<Route path="/gem-project" element={<GEMProject />} />
						<Route path="/contact-us" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
