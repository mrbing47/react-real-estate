import React from "react";

export default function HomeItem(props) {
	return (
		<div className="home-card">
			<img src={props.src} alt="" className="home-img" />
			<div className="home-title">{props.title}</div>
			<div className="home-body">{props.body}</div>
			<button className="explore-house">Explore Houses</button>
			{props.price ? <div className="home-price">{props.price}</div> : ""}
		</div>
	);
}
