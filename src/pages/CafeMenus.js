import React from "react";

export default function CafeMenu() {
  return (
    <>
      <section>
        <h2>Coffee</h2>
        <img
          src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg"
          alt="coffee icon"
        />
        <article className="item">
          <p className="flavor">French Vanilla</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">3.00</p>
        </article>
        <article className="item">
          <p className="flavor">Caramel Macchiato</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">3.75</p>
        </article>
        <article className="item">
          <p className="flavor">Pumpkin Spice</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">3.50</p>
        </article>
        <article className="item">
          <p className="flavor">Hazelnut</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">4.00</p>
        </article>
        <article className="item">
          <p className="flavor">Mocha</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">4.50</p>
        </article>
      </section>
      <section>
        <h2>Desserts</h2>
        <img
          src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg"
          alt="pie icon"
        />
        <article className="item">
          <p className="dessert">Donut</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </span>
          </p>
          <p className="price">1.50</p>
        </article>
        <article className="item">
          <p className="dessert">Cherry Pie</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">2.75</p>
        </article>
        <article className="item">
          <p className="dessert">Cheesecake</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">3.00</p>
        </article>
        <article className="item">
          <p className="dessert">Cinnamon Roll</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Add</button>
            </span>
          </p>
          <p className="price">2.50</p>
        </article>
      </section>
      <hr className="bottom-line" />
      <section className="cart-section">
        <article className="item">
          <p className="dessert">Cart</p>
          <p className="add-to-cart-section">
            <span className="product-action">
              <button style={{ width: "100%" }}>Buy</button>
            </span>
          </p>
          <p className="price">12</p>
        </article>
      </section>
    </>
  );
}
