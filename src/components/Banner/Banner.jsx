import React from "react";
import BannerSearch from "./BannerSearch";
import BannerDetail from "./BannerDetail";
import BannerButtons from "./BannerButtons";
import "./banner.css";
import BannerOffer from "./BannerOffer";

export default function Banner() {
	return (
		<div id="banner-container">
			<BannerDetail />
			<BannerSearch element_id={"banner-search-container"} />
			<BannerButtons />
			<BannerOffer />
		</div>
	);
}
