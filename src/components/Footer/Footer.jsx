import React from "react";
import "./footer.css";
import FooterLinkList from "./FooterLinkList";
export default function Footer() {
	return (
		<div id="footer-container">
			<div id="left-footer">
				<img
					class="visible-xs"
					src="https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/common/nestawayIcon-69fd89629dc0272cc6300959e02fdcd3.svg"
					alt="Nestaway Icon"
				/>
				<div id="footer-body">
					<p>
						NestAway is India's fastest growing
						<span id="footer-body-highlight">"Managed Home Rental Network"</span> attempting to provide better
						rental solutions via design & technology.
					</p>
					<p>
						We help find, book rental homes of choice across Indian cities. We assist with move-in, provide home
						maintenance services from cleaning, damages to rent payment & even move-out.
					</p>
					<p>
						Whatever be your budget, whatever you may call a home (a bed, a room or an entire house), we have
						something for you!
					</p>
				</div>
			</div>
			<div id="right-footer">
				<FooterLinkList
					title={"NestAway"}
					links={[
						"About us",
						"Behind our new look",
						"Our Brand Book",
						"Careers",
						"Trends & info",
						"Blog",
						"Contact us",
					]}
				/>
				<FooterLinkList
					title={"For owners & tenants"}
					links={[
						"List your property",
						"Rent predictor",
						"Refer an owner",
						"Refer a tenant",
						"Online Rent Agreement Generator",
						"Coupon codes",
					]}
				/>
				<FooterLinkList title={"More information"} links={["Help center", "Privacy policy", "Terms of Use"]} />
			</div>
		</div>
	);
}
