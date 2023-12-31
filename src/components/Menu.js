import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartReducers";
export default function Menu({
  id,
  name,
  price,
  isCart = false,
  cartCount,
}) {
  const dispatch = useDispatch();
  const handleProductAction = () => {
    dispatch(addProduct(id));
  };
  return (
    <article className="item" key={id}>
      <p className="flavor">{name}</p>
      <p className="add-to-cart-section">
        <span className="product-action">
          {cartCount ? (
            <>
              <button>-</button>
              <span>{cartCount}</span>
              <button onClick={handleProductAction}>+</button>
            </>
          ) : (
            <button style={{ width: "100%" }} onClick={handleProductAction}>{`${
              isCart ? "Buy" : "Add"
            }`}</button>
          )}
        </span>
      </p>
      <p className="price">{price}</p>
    </article>
  );
}
