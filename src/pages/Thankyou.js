import React from "react";

export default function Thankyou() {
    return (
      <section className="thankyou-page">
        <h2>Thank you!</h2>
        <article className="item">
          <p className="flavor">Your order is on the way enjoy :)</p>
        </article>
        <article className="item checkout-btn">
          <p className="price user-info-field">
            <button>Got to home</button>
          </p>
        </article>
      </section>
    );
}