import { IProductData } from "@/pages";
import { setCartMonitor, setCartMotherboard, setCartOthers, setCartPowerSupply, setCartProcessor, setCartRAM, setCartStorage } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { Button, Card } from "antd";
import { useRouter } from "next/router";
import React from "react";

const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

const ProductCard: React.FC<{ product: IProductData }> = ({ product }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { category, back } = router.query;

  const navigateToDetailsPage = (id: number | string) => {
    router.push(`/product/${id}`);
  };

  const addToCartPage = () => {
    if (category?.includes("Processor")) {
      dispatch(setCartProcessor(product));
    }
    else if (category?.includes("Motherboard")) {
      dispatch(setCartMotherboard(product));
    }
    else if (category?.includes("RAM")) {
      dispatch(setCartRAM(product));
    }
    else if (category?.includes("Power Supply")) {
      dispatch(setCartPowerSupply(product));
    }
    else if (category?.includes("Storage")) {
      dispatch(setCartStorage(product));
    }
    else if (category?.includes("Monitor")) {
      dispatch(setCartMonitor(product));
    }
    else if (category?.includes("others")) {
      dispatch(setCartOthers(product));
    }
    router.push("/pc-builder");
  };

  return (
    <Card
      style={gridStyle}
      cover={
        <img
          alt="example"
          src={product.image}
          className="cursor-pointer"
          onClick={() => navigateToDetailsPage(product.id)}
        />
      }
    >
      <div>
        <b
          className="mx-2 cursor-pointer"
          onClick={() => navigateToDetailsPage(product.id)}
        >
          {product.product_name}
        </b>
        <p className="mx-2">Category: {product.category}</p>
        <p className="mx-2 text-ellipses line-clamp-3">{product.description}</p>
      </div>
      <p className="mx-2">Price: {product.price} BDT</p>
      <p className="mx-2">Status: {product.status}</p>
      <p className="mx-2">Rating: {product.average_rating}/5</p>
      <div>
        {back && (
          <Button
            type="primary"
            className="bg-black"
            size={"large"}
            onClick={addToCartPage}
          >
            Add to Builder
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
