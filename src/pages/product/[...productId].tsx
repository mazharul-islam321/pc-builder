import { GetStaticPaths, GetStaticProps } from "next";
import ProductInfo from "@/files/product_info/csvjson.json";
import { IProductData } from "..";
import Image from "next/image";
import CustomLayout from "@/components/layout/Layout";
import { Typography } from "antd";

const { Title } = Typography;

type Props = {
  product: IProductData;
};

const ProductDetails = ({ product }: Props) => {
  return (
    <CustomLayout>
      <div className="flex justify-center align-center mt-10 mb-10">
        <Image
          src={product.image}
          alt={product.product_name}
          width={500}
          height={500}
        />
      </div>
      <Title className="text-center">{product.product_name}</Title>
      <div className="mx-2 md:flex justify-around align-center">
        <p className="sm:w-full">Status: {product.status}</p>
        <p className="sm:w-full">Category: {product.category}</p>
        <p className="sm:w-full">Price: {product.price}</p>
      </div>
      <div className="mx-2 pb-10">
        <p>Description: {product.description}</p>
        <p>Key Features: {product.key_features}</p>
        <p>Individual Rating: {product.individual_rating} (Out of 5 Stars)</p>
        <p>Average Rating: {product.average_rating} (Out of 5 Stars)</p>
        <p>Reviews: {product.reviews}</p>
      </div>
    </CustomLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productIds = ProductInfo.map((product) => product.id.toString());

  const paths = productIds.map((productId) => ({
    params: { productId: [productId] }, // Pass productId as an array
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const productId = params?.["productId"]?.[0];
  const product = ProductInfo.find((product) => product.id === productId);
  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;
