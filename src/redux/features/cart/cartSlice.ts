import { IProductData } from "@/pages";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartProduct {
  Processor: IProductData | null;
  Motherboard: IProductData | null;
  RAM: IProductData | null;
  "Power Supply": IProductData | null;
  Storage: IProductData | null;
  Monitor: IProductData | null;
  Others: IProductData | null;
}

export const cartInitialState: ICartProduct = {
  Processor: null,
  Motherboard: null,
  RAM: null,
  "Power Supply": null,
  Storage: null,
  Monitor: null,
  Others: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    setCart: (_state, action: PayloadAction<ICartProduct>) => {
      return action.payload;
    },
    setCartEmpty: () => {
      return cartInitialState;
    },
    setCartProcessor: (state, action: PayloadAction<IProductData>) => {
      state.Processor = action.payload;
    },
    setCartMotherboard: (state, action: PayloadAction<IProductData>) => {
      state.Motherboard = action.payload;
    },
    setCartRAM: (state, action: PayloadAction<IProductData>) => {
      state.RAM = action.payload;
    },
    setCartPowerSupply: (state, action: PayloadAction<IProductData>) => {
      state["Power Supply"] = action.payload;
    },
    setCartStorage: (state, action: PayloadAction<IProductData>) => {
      state.Storage = action.payload;
    },
    setCartMonitor: (state, action: PayloadAction<IProductData>) => {
      state.Monitor = action.payload;
    },
    setCartOthers: (state, action: PayloadAction<IProductData>) => {
      state.Others = action.payload;
    },
  },
});

export const { setCart, setCartEmpty, setCartProcessor, setCartMotherboard, setCartRAM, setCartPowerSupply, setCartStorage, setCartMonitor, setCartOthers } = cartSlice.actions;

export default cartSlice.reducer;
