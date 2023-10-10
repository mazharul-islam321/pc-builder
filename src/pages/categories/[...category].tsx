import CustomLayout from "@/components/layout/Layout";
import FeaturedProducts from "@/components/product/featured_product";
import ProductInfo from "@/files/product_info/csvjson.json";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProductData } from "..";
import { categories } from "@/components/product/featured_category";
import { useRouter } from "next/router";

type Props = {
  data: IProductData[];
};

const ProductCategory = ({ data }: Props) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <CustomLayout>
      <FeaturedProducts title={category as string} key={category as string} data={data} />
    </CustomLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map((product) => ({
    params: { category: [product.path] }, // Pass productId as an array
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const productCategory = params?.["category"]?.[0] || null;
  const allProductCategory = categories.map((p) => p.category_name);
  let data = [];
  if (productCategory === "others") {
    data = ProductInfo.filter(
      (product) => !!allProductCategory.includes(product.category)
    );
  } else {
    data = ProductInfo.filter(
      (product) => product.category === productCategory
    );
  }
  return {
    props: {
      data,
    },
  };
};

export default ProductCategory;
