import CustomLayout from "@/components/layout/Layout";
import FeaturedCategories from "@/components/product/featured_category";
import FeaturedProducts, {
  HomeProps,
} from "@/components/product/featured_product";
import HeroSlider from "@/components/slider/heroSlider";
import ProductInfo from "@/files/product_info/csvjson.json";
import { Divider } from "antd";
import "antd/dist/reset.css";
import { AppContext } from "next/app";
import { FC } from "react";

export interface IProductData {
  id: string | number;
  image: string;
  product_name: string;
  category: string;
  status: string;
  price: number;
  description: string;
  key_features: string;
  individual_rating: number;
  average_rating: number;
  reviews: number;
  isFeatured: boolean;
}

const Home: FC<HomeProps> = ({ data }) => {
  return (
    <>
      <CustomLayout>
        <HeroSlider />
        <FeaturedProducts data={data} />
        <Divider style={{ height: "5px" }} />
        <FeaturedCategories />
      </CustomLayout>
    </>
  );
};

export const getStaticProps = (ctx: AppContext) => {
  const randomProducts = [];

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * ProductInfo.length);
    randomProducts.push(ProductInfo[randomIndex]);
  }

  return {
    props: { data: randomProducts },
  };
};

export default Home;
