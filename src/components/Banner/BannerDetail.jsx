import React from "react";

export default function BannerDetail() {
	return (
		<div className="details-container">
			<div id="left-detail">
				Easiest way to rent a home
				<div className="banner-benefits-container">
					<div className="banner-benefit">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined">
							<polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon>
						</svg>
						Exclusive Homes
					</div>
					<div className="banner-benefit">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined">
							<polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon>
						</svg>
						Assisted Visits
					</div>
					<div className="banner-benefit">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.357 342.357" fill="undefined">
							<polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606"></polygon>
						</svg>
						Instant Move-In
					</div>
				</div>
			</div>
			<div id="right-detail">
				<img
					id="banner-img"
					src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/home/home_mask_icon-2c993fcb703d5a9937bafd8e2472b7b4.png"
					alt="Banner"
				/>
			</div>
		</div>
	);
}
