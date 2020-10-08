import React from "react";
import BannerOfferItem from "./BannerOfferItem";

export default function BannerOffer() {
	return (
		<div id="banner-offers-container">
			<BannerOfferItem
				src={
					"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/emi/emi-srp-fdb3151740f5fb60c0250233d320c2f7.png"
				}
				title={"Pay with 0% EMI"}
				body={"Get 100% off on one time Nestaway fee on booking a full house or private room"}
				color={"green"}
			/>
			<BannerOfferItem
				src={
					"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/offers/offer-orange-48e2e104b7ae1cf3adfd6c4427d38295.png"
				}
				title={"100% Off on Nestaway fee"}
				body={"Get 100% off on one time Nestaway fee on booking a full house or private room"}
				color={"orange"}
			/>
			<BannerOfferItem
				src={"https://i.imgur.com/1L678pl.png"}
				title={"Free transfer guarantee within 30 days"}
				body={"Book any house in Nestaway and freely shift to a new house within 30 days."}
				color={"blue"}
			/>
		</div>
	);
}
