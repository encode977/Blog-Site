import React from "react";
import "./Banner.scss";
import banner from "../assets/Main-article.png";
import user from "../assets/User.png";

function Banner() {
  return (
    <section className="banner">
      <img className="banner__img" src={banner} alt="" />
      <div className="banner__desc">
        <h2>
          Weekly Newsletter: Tweets for Higher <br />
          Engagements
        </h2>
        <p className="text">
          In this weekly newsletter we will covering ten types of engagements
          tweets. This is the guide if you are just starting with twitter.
        </p>
        <div className="user__profile">
          <img className="user__img" src={user} alt="" />
          <div className="user__desc">
            <h3>Susma Dangi</h3>
            <p className="role">Content Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
