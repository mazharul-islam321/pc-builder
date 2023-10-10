import CustomLayout from "@/components/layout/Layout";
import { categories } from "@/components/product/featured_category";
import FeaturedProducts from "@/components/product/featured_product";
import ProductInfo from "@/files/product_info/csvjson.json";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProductData } from "..";

type Props = {
  data: IProductData[];
};

const FeaturedProductCategory = ({ data }: Props) => {
  return (
    <CustomLayout>
      <FeaturedProducts data={data} />
    </CustomLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map((product) => ({
    params: { category: [product.path] },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const category = params?.["category"]?.[0] || null;
  
  let data;
  if (category !== "others") {
    data = ProductInfo.filter((product) => product.category === category && product.isFeatured === true);
  } else {
    data = ProductInfo.filter(
      (product) =>
        product.category !== "Processor" &&
        product.category !== "Motherboard" &&
        product.category !== "RAM" &&
        product.category !== "Power Supply" &&
        product.category !== "Storage" &&
        product.category !== "Monitor" && product.isFeatured === true 
    );
  }

  return {
    props: {
      data,
    },
  };
};
export default FeaturedProductCategory;
