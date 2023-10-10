import { IProductData } from "@/pages";
import {
  setCartMonitor,
  setCartMotherboard,
  setCartOthers,
  setCartPowerSupply,
  setCartProcessor,
  setCartRAM,
  setCartStorage,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { Button, Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

const ProductCardOnPC_Builder: React.FC<{ product: IProductData}> = ({
  product,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { category, back } = router.query;
  return (
    <div className="md:flex justify-start align-center">
      <img
        src={product.image}
        alt={product.product_name}
        style={{ width: "250px" }}
      />
      <div>
        <b className="mx-2 cursor-pointer">{product.product_name}</b>
        <p className="mx-2 my-2">Category: {product.category}</p>
        <div>
          <p className="mx-2">Price: {product.price} BDT</p>
          <p className="mx-2">Status: {product.status}</p>
          <p className="mx-2">Rating: {product.average_rating}/5</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardOnPC_Builder;
