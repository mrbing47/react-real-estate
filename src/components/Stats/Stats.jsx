import React from "react";
import StatsItem from "./StatsItem";
import "./stats.css";

export default function Stats() {
	return (
		<div id="stats-container">
			<StatsItem title={"72,400 +"} body={"Happy Customers"} />
			<StatsItem title={"30,500 +"} body={"Houses across India"} />
			<StatsItem title={"13"} body={"Cities in India"} />
			<StatsItem title={"₹38+ Cr"} body={"Saving made on brokerage"} />
		</div>
	);
}
