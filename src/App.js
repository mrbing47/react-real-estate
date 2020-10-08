import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";

function App() {
	return (
		<div className="App">
			<Banner />
			<section id="main-content">
				<Navbar />
				<Home />
				<Benefits />
			</section>
		</div>
	);
}

export default App;
