import React from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";

export default function MenuList({ product }) {
  const cartValues = useSelector((state) => state.cart.cartValues);
console.log(cartValues);
  return (
    <section>
      <h2>{product.flavor.name}</h2>
      <img src={product.flavor.image} alt={product.flavor.alt} />
      {product.flavor.items.map((productsList) => {
        const productCartValue = cartValues.filter(
          (items) => items.productId === productsList.id
        );
        console.log(productCartValue);
        const cartCount = productCartValue.length
          ? productCartValue[0].count
          : 0;
        return <Menu {...productsList} isCart={false} cartCount={cartCount} />;
      })}
    </section>
  );
}
