import React from "react";
import { useState, useRef } from "react";
import NavSearch from "../Banner/BannerSearch";

import "./navbar.css";

export default function Navbar() {
	const cityRef = useRef("Delhi");
	const genderRef = useRef("Any");
	const [select, setSelect] = useState(false);

	const handleCityClick = (e) => {
		cityRef.current.classList.toggle("selected");
		e.target.classList.toggle("selected");
		cityRef.current = e.target;
	};

	const handleGenderClick = (e) => {
		genderRef.current.classList.toggle("selected");
		e.target.classList.toggle("selected");
		genderRef.current = e.target;
	};

	return (
		<div id="nav-container">
			<div id="navbar">
				<div className="nav-item" onClick={() => window.scrollTo(0, 0)}>
					<img
						src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/common/nestawayLogo-eb150adf041954443b4ff9fcb97dad98.svg"
						alt="Logo"
					/>
				</div>
				<div className="nav-item" onClick={() => setSelect(true)}>
					{cityRef.current.innerHTML ? cityRef.current.innerHTML : cityRef.current}
					<i className="arrow-down"></i>
				</div>
				<div className="nav-item" onClick={() => setSelect(true)}>
					{genderRef.current.innerHTML ? genderRef.current.innerHTML : genderRef.current}
					<i className="arrow-down"></i>
				</div>
				<NavSearch element_id="navbar-search-container" />
				<div className="nav-item" id="schedule-visits">
					Scheduled Visits
				</div>
				<div className="nav-item" id="list-prop">
					List your Property
				</div>
				<div className="nav-item">Menu</div>

				<div id="options-container-parent" className={select ? "show-options" : "hide-options"}>
					<div id="options-container">
						<div id="left-nav">
							<h1>I'm looking to rent a home in</h1>
							<div id="city-container">
								<div className="options selected" ref={cityRef} onClick={handleCityClick}>
									Delhi
								</div>
								<div className="options" onClick={handleCityClick}>
									Bangalore
								</div>
								<div className="options" onClick={handleCityClick}>
									Gurgaon
								</div>
								<div className="options" onClick={handleCityClick}>
									Hyderabad
								</div>
								<div className="options" onClick={handleCityClick}>
									Noida
								</div>
								<div className="options" onClick={handleCityClick}>
									Pune
								</div>
								<div className="options" onClick={handleCityClick}>
									Ghaziabad
								</div>
								<div className="options" onClick={handleCityClick}>
									Greater Noida
								</div>
								<div className="options" onClick={handleCityClick}>
									Faridabad
								</div>
								<div className="options" onClick={handleCityClick}>
									Navi Mumbai
								</div>
								<div className="options" onClick={handleCityClick}>
									Thane
								</div>
								<div className="options" onClick={handleCityClick}>
									Mumbai
								</div>
								<div className="options" onClick={handleCityClick}>
									Chennai
								</div>
								<div className="options" onClick={handleCityClick}>
									Mysore
								</div>
								<div className="options" onClick={handleCityClick}>
									Kota
								</div>
								<div className="options" onClick={handleCityClick}>
									Dehradun
								</div>
								<div className="options" onClick={handleCityClick}>
									Bhubaneswar
								</div>
								<div className="options" onClick={handleCityClick}>
									Kolkata
								</div>
								<div className="options" onClick={handleCityClick}>
									Visakhapatnam
								</div>
								<div className="options" onClick={handleCityClick}>
									Coimbatore
								</div>
								<div className="options" onClick={handleCityClick}>
									Chandigarh
								</div>
								<div className="options" onClick={handleCityClick}>
									Indore
								</div>
								<div className="options" onClick={handleCityClick}>
									Kochi
								</div>
								<div className="options" onClick={handleCityClick}>
									Ahmedabad
								</div>
								<div className="options" onClick={handleCityClick}>
									Jaipur
								</div>
								<div className="options" onClick={handleCityClick}>
									Agra
								</div>
								<div className="options" onClick={handleCityClick}>
									Mangalore
								</div>
								<div className="options" onClick={handleCityClick}>
									Vijaywada
								</div>
								<div className="options" onClick={handleCityClick}>
									Bhopal
								</div>
								<div className="options" onClick={handleCityClick}>
									Lucknow
								</div>
								<div className="options" onClick={handleCityClick}>
									Patna
								</div>
								<div className="options" onClick={handleCityClick}>
									Ludhiana
								</div>
							</div>
						</div>
						<div id="right-nav">
							<h1>For</h1>
							<div id="gender-container">
								<div className="options" onClick={handleGenderClick}>
									Male
								</div>
								<div className="options" onClick={handleGenderClick}>
									Female
								</div>
								<div className="options" onClick={handleGenderClick}>
									Family
								</div>
								<div className="options selected" ref={genderRef} onClick={handleGenderClick}>
									Any
								</div>
							</div>
						</div>
						<button id="nav-update" onClick={() => setSelect(false)}>
							UPDATE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
