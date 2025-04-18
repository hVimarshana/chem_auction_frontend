import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Card = ({ id, img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div>
      <Link to={`/product/${id}`} className="card-link">
        <section className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              {star} {star} {star} {star}
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <BsFillBagFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </Link>
    </div>
  );
}

export default Card;
