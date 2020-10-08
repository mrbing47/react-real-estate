import React from "react";
import BenefitItem from "./BenefitItem";
import "./benefit.css";

export default function Benefits() {
	return (
		<div id="benefits-container">
			<div id="benefits-heading">Benefits of renting with us</div>
			<div id="benefits-card-container">
				<BenefitItem
					src={
						"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/home/huntingImg1-5b62e592d25a650fac53a6ae12ff71fc.png"
					}
					body={"Zero Brokerage Options"}
				/>
				<BenefitItem
					src={
						"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/home/huntingImg2-d116c04835ca60e5fccd7ce80385187f.png"
					}
					body={"Affordable Rents"}
				/>
				<BenefitItem
					src={
						"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/common/idrBenefits-cad61ed14966c18bd2d396ecf6f1ea8a.png"
					}
					body={"Instant Deposit Refund"}
				/>
			</div>
		</div>
	);
}
