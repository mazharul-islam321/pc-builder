import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Layout, Space, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Login from "../login/Login";

const { Header, Content, Footer } = Layout;

type Props = {
	children: React.ReactNode;
};

const items: MenuProps["items"] = [
	{
		label: <Link href="/categories/Processor">CPU/Processor</Link>,
		key: "cpu",
	},
	{
		label: <Link href="/categories/Motherboard">Motherboard</Link>,
		key: "Motherboard",
	},
	{
		label: <Link href="/categories/RAM">RAM</Link>,
		key: "RAM",
	},
	{
		label: <Link href="/categories/Power Supply">Power Supply Unit</Link>,
		key: "Power Supply Unit",
	},
	{
		label: <Link href="/categories/Storage">Storage Device</Link>,
		key: "Storage Device",
	},
	{
		label: <Link href="/categories/Monitor">Monitor</Link>,
		key: "Monitor",
	},
	{
		label: <Link href="/categories/others">Others</Link>,
		key: "Others",
	},
];

const navItems: MenuProps["items"] = [
	{
		label: <Login />,
		key: "Logout",
	},
];

const CustomLayout = (props: Props) => {
	const { children } = props;
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const router = useRouter();

	const navigateToHomePage = () => {
		router.push("/");
	};

	return (
		<Layout className="layout">
			<Header className="md:flex md:justify-center md:items-center h-32 sm:h-16">
				<div
					className="text-white w-52 cursor-pointer"
					onClick={navigateToHomePage}
				>
					PC Builder Shop
				</div>
				<div className="flex align-center justify-end w-100">
					<Dropdown menu={{ items }} trigger={["click"]}>
						<a
							onClick={(e) => e.preventDefault()}
							className="text-white"
						>
							<Space>
								Categories
								<DownOutlined />
							</Space>
						</a>
					</Dropdown>
					<div className="mx-4">
						<Link href="/pc-builder">
							<Button
								type="primary"
								className="bg-blue"
								size={"large"}
							>
								PC Builder
							</Button>
						</Link>
					</div>
					<div className="mx-4">
						<Dropdown
							menu={{ items: navItems }}
							trigger={["click"]}
						>
							<a
								onClick={(e) => e.preventDefault()}
								className="text-white"
							>
								<Space>
									User
									<DownOutlined />
								</Space>
							</a>
						</Dropdown>
					</div>
				</div>
			</Header>
			<Content style={{ padding: "0 50px" }}>
				<div
					className="site-layout-content"
					style={{ background: colorBgContainer }}
				>
					{children}
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				PC Builder ©2023 Created by Mamun
			</Footer>
		</Layout>
	);
};

export default CustomLayout;
