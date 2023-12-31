import React from "react";
import { products } from "../data/products";
import MenuList from "../components/MenuList";
import Menu from "../components/Menu";

export default function CafeMenu() {
  return (
    <>
      {products.map(product => <MenuList product={product} />)}
      <hr className="bottom-line" />
      <section className="cart-section">
        <Menu id="cart-sec" name="Cart" price={100} isCart />
      </section>
    </>
  );
}
