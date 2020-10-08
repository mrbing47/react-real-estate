import React from "react";

import "./owner.css";
import OwnerItem from "./OwnerItem";

export default function Owner() {
	return (
		<div id="owner-container">
			<div id="left-owner">
				<div id="owner-heading">Are you a home owner?</div>
				<button id="owner-list-prop">List Your Property</button>
			</div>
			<div id="right-owner">
				<OwnerItem
					title={"Find verified tenants"}
					body={"From showing your house to tenants, police verifying them & managing paperwork, we do it all"}
				/>
				<OwnerItem
					title={"Get rent on time"}
					body={"We assure rent on 5th of every month. No more late rent payments or rent collection hassle"}
				/>
				<OwnerItem
					title={"Get house maintenance"}
					body={"We provide periodic & on-demand repairs and cleaning of the house to keep it in good condition"}
				/>
			</div>
		</div>
	);
}
