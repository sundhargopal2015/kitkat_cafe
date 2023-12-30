import React from "react";

export default function Checkout() {
  return (
    <>
      <section className="checkout">
        <h2>My cart</h2>
        <article className="item header">
          <p className="flavor product-name">Item</p>
          <p className="price no-of-items">Qty</p>
          <p className="price">Price</p>
        </article>
        <article className="item">
          <p className="flavor product-name">French Vanilla</p>
          <p className="price no-of-items">3</p>
          <p className="price">300</p>
        </article>
        <article className="item">
          <p className="flavor product-name">French Vanilla</p>
          <p className="price no-of-items">3</p>
          <p className="price">300</p>
        </article>
        <article className="item">
          <p className="flavor product-name">French Vanilla</p>
          <p className="price no-of-items">3</p>
          <p className="price">300</p>
        </article>
        <article className="item">
          <p className="flavor product-name">French Vanilla</p>
          <p className="price no-of-items">3</p>
          <p className="price">300</p>
        </article>
      </section>
      <hr className="bottom-line" />
      <section className="price-summary">
        <h2>Price Summary</h2>
        <article className="item">
          <p className="flavor">Cart total</p>
          <p className="price">1200</p>
        </article>
        <article className="item">
          <p className="flavor">Delivery charge</p>
          <p className="price">100</p>
        </article>
        <article className="item">
          <p className="flavor">Total</p>
          <p className="price">1200</p>
        </article>
        <article className="item checkout-btn">
          <p className="flavor">&nbsp;</p>
          <p className="price">
            <button>Proceed to checkout</button>
          </p>
        </article>
      </section>
    </>
  );
}
