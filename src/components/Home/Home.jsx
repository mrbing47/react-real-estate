import React from "react";
import "./home.css";
import HomeItem from "./HomeItem";

export default function Home() {
	return (
		<div id="home-container">
			<div id="home-heading">Designed for everyone</div>
			<div id="home-card-container">
				<HomeItem
					src={
						"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/common/grouped/groupFamily-3a4cdb1cc95d3f004d6cc36f209c8403.png"
					}
					title={"Homes for Families"}
					body={
						"Rent a beautiful house for your family. Choose from flats in societies, individual apartments, bungalows & villas."
					}
				/>
				<HomeItem
					src={
						"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/common/grouped/groupFriends-de315f1cc67cfabe13b2d56a2f405b21.png"
					}
					title={"Homes for Friends"}
					body={
						"Rent a bachelor friendly house with your friends. Choose from flats in societies, individual apartments, bungalows & villas."
					}
					price={"₹3500-₹20000"}
				/>
				<HomeItem
					src={
						"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/common/grouped/groupSingle-4215a7d6111d16053df14dced86827d7.png"
					}
					title={"Homes just for you"}
					body={
						"Rent a shared room or a private room for yourself. Choose from flats in societies or individual apartments."
					}
					price={"₹3500-₹20000"}
				/>
			</div>
		</div>
	);
}
