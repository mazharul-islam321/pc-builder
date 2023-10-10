import CustomLayout from "@/components/layout/Layout";
import Login from "@/components/login/Login";
import { categories as allCategories } from "@/components/product/featured_category";
import ProductCardOnPC_Builder from "@/components/product/product_builder_card";
import { ICartProduct, setCartEmpty } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button, Card, Col, Row } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { toast } from "react-toastify";

type Props = {
  categories: {
    category_name: string;
    path: string;
  }[];
};

const PC_Builder = (props: Props) => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const navigateToPCbuilderPage = (category: string) => {
    router.push(
      { pathname: `/categories/${category}`, query: { back: "pc-builder" } },
      `/categories/${category}`
    );
  };

  const checkIsBuildCompleted = useMemo(() => {
    if (
      [
        cart.Processor,
        cart.Motherboard,
        cart.RAM,
        cart["Power Supply"],
        cart.Storage,
        cart.Monitor,
      ].includes(null)
    ) {
      return false;
    } else {
      return true;
    }
  }, [cart]);

  const buildCompleteHandler = () => {
    toast.success("Build completed successfully");
    dispatch(setCartEmpty());
  };

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <CustomLayout>
        <div
          className="flex justify-center align-center"
          style={{ height: "80vh" }}
        >
          <Login />
        </div>
      </CustomLayout>
    );
  }

  return (
    <CustomLayout>
      <Row gutter={16} className="my-10">
        <Col span={24}>
          {props.categories.map((category) => (
            <Card
              title={category.category_name}
              key={category.category_name}
              className="my-5"
              bordered={false}
            >
              <div className="md:flex justify-between align-center">
                {cart?.[category.path as keyof ICartProduct] ? (
                  <ProductCardOnPC_Builder
                    product={cart?.[category.path as keyof ICartProduct]!}
                  />
                ) : (
                  <div>Not Selected</div>
                )}
                <Button
                  type="primary"
                  className="bg-black"
                  size={"large"}
                  onClick={() => navigateToPCbuilderPage(category.path)}
                >
                  Choose
                </Button>
              </div>
            </Card>
          ))}
        </Col>
      </Row>
      <div className="flex justify-end pb-10 pr-5">
        <Button
          type="primary"
          className="bg-black"
          size={"large"}
          disabled={!checkIsBuildCompleted}
          onClick={buildCompleteHandler}
        >
          Complete Build
        </Button>
      </div>
    </CustomLayout>
  );
};

export const getServerSideProps = async () => {
  const categories = allCategories.map((category) => ({
    category_name: category.category_name,
    path: category.path,
  }));

  return {
    props: {
      categories,
    },
  };
};

export default PC_Builder;
