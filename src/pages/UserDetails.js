import React from "react";

export default function UserDetails() {
  return (
    <section className="user-details">
      <h2>Please Add Your Details</h2>
      <article className="item">
        <p className="flavor">Name</p>
        <input type="text" className="user-info-field" />
      </article>
      <article className="item">
        <p className="flavor">Phone Number</p>
        <input type="text" className="user-info-field" />
      </article>
      <article className="item">
        <p className="flavor">Address</p>
        <textarea type="textarea" className="user-info-field"></textarea>
      </article>
      <article className="item checkout-btn">
        <p className="flavor">&nbsp;</p>
        <p className="price user-info-field">
          <button>Proceed to checkout</button>
        </p>
      </article>
    </section>
  );
}
