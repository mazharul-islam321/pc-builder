import ProductCard from "@/components/product/product_card";
import { IProductData } from "@/pages";
import { Card, Col, Row } from "antd";
import React, { FC } from "react";

export interface HomeProps {
	data: IProductData[];
	title?: string;
}

const gridStyle: React.CSSProperties = {
	width: "100%",
	textAlign: "center",
};

const FeaturedProducts: FC<HomeProps> = ({
	data,
	title = "Featured Products",
}) => {
	return (
		<div className="my-10">
			<Card title={title} className="bg-gray-400 text-center">
				<Row>
					{data?.map((product) => (
						<Col key={product.description} span={8} xs={24} md={6}>
							<Card.Grid key={product.image} style={gridStyle}>
								<ProductCard product={product} />
							</Card.Grid>
						</Col>
					))}
				</Row>
			</Card>
		</div>
	);
};

export default FeaturedProducts;
