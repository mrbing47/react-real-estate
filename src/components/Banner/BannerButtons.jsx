import React from "react";

export default function BannerButtons() {
	return (
		<div id="banner-buttons-container">
			<button id="own-prop">
				<img
					src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/home/owner-banner-home-4e6b4376e160f02068cdad2b2db7132b.png"
					alt=""
				/>
				Do you own a property?
				<a href="#">
					List it Here <i className="arrow-right"></i>
				</a>
			</button>
			<button id="own-franchise">
				<img
					src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/common/franchiseIcon-983fa741ca0b127aef73632fa65b4f9c.png"
					alt=""
				/>
				Own a Yehlosoft Franchise
				<a href="#">
					Register <i className="arrow-right"></i>
				</a>
			</button>
		</div>
	);
}
