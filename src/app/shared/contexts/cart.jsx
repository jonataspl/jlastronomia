import { createContext, useContext } from "react";

const cartContext = createContext();

const useCartContext = () => {
  return useContext(cartContext);
};
