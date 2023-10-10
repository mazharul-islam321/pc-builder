import { IProductData } from "@/pages";
import {
	DatabaseOutlined,
	DesktopOutlined,
	EllipsisOutlined,
	FileZipOutlined,
	FolderOpenOutlined,
	LaptopOutlined,
	PoweroffOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { FC } from "react";

export interface HomeProps {
	data: IProductData[];
}

const gridStyle: React.CSSProperties = {
	width: "100%",
	textAlign: "center",
};

export const categories = [
	{
		category_name: "CPU / Processor",
		icon: <LaptopOutlined className="text-3xl" />,
		path: "Processor",
	},
	{
		category_name: "Motherboard",
		icon: <DatabaseOutlined className="text-3xl" />,
		path: "Motherboard",
	},
	{
		category_name: "RAM",
		icon: <FileZipOutlined className="text-3xl" />,
		path: "RAM",
	},
	{
		category_name: "Power Supply Unit",
		icon: <PoweroffOutlined className="text-3xl" />,
		path: "Power Supply",
	},
	{
		category_name: "Storage Device",
		icon: <FolderOpenOutlined className="text-3xl" />,
		path: "Storage",
	},
	{
		category_name: "Monitor",
		icon: <DesktopOutlined className="text-3xl" />,
		path: "Monitor",
	},
	{
		category_name: "Others (GPU, Mouse, Keyboard, etc…)",
		icon: <EllipsisOutlined className="text-3xl" />,
		path: "others",
	},
];

const FeaturedCategories: FC = () => {
	const router = useRouter();
	const navigate = (path: string) => {
		router.push(path);
	};
	return (
		<Card title="Featured Categories" className="bg-gray-400 text-center">
			<Row>
				{categories.map((category) => (
					<Col key={category.category_name} span={8} xs={24} md={6}>
						<Card.Grid
							className="cursor-pointer"
							style={gridStyle}
							onClick={() =>
								navigate(`/featured/${category.path}`)
							}
						>
							<div>{category.icon}</div>
							{category.category_name}
						</Card.Grid>
					</Col>
				))}
			</Row>
		</Card>
	);
};

export default FeaturedCategories;
