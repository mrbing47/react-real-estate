import React from "react";

export default function BenefitItem(props) {
	return (
		<div className="benefits-card">
			<img src={props.src} alt="" className="benefit-img" />
			<div className="benefit-body">{props.body}</div>
		</div>
	);
}
