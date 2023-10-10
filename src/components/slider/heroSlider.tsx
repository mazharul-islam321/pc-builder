import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
	height: "350px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

const HeroSlider: React.FC = () => (
	<Carousel autoplay className="my-10">
		<div className="flex justify-center align-center">
			<img
				src="https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-durga-puja-home-banner-982x500.webp"
				alt=""
				style={{ margin: "0 auto" }}
			/>
		</div>
		<div className="flex justify-center align-center">
			<img
				src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp"
				alt=""
				style={{ margin: "0 auto" }}
			/>
		</div>
	</Carousel>
);

export default HeroSlider;
