import React from "react";
import "./Card.scss";

function Card({ item }) {
  const { id, title, image, text, author } = item;
  return (
    <section className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
      {author.map((item) => (
        <div className="user">
          <img className="user__image" src={item.avatar} alt="" />
          <div className="user__desc">
            <h3>{item.name}</h3>
            <p className="user__role">{item.role}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Card;
