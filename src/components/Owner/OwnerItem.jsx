import React from "react";

export default function OwnerItem(props) {
	return (
		<div className="owner-card">
			<div className="owner-title">{props.title}</div>
			<div className="owner-body">{props.body}</div>
			<a href="#">Know More</a>
		</div>
	);
}
