import React from "react";

export default function StatsItem(props) {
	return (
		<div className="stats-card">
			<div className="stat-title">{props.title}</div>
			<div className="stat-body">{props.body}</div>
		</div>
	);
}
