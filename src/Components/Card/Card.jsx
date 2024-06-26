/* eslint-disable react/prop-types */

import "./Card.css";
function Card({ image, title, subtitle, date }) {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <div className="card__content">
        <h4 className="card__title">{title}</h4>
        <p className="card__desc">{subtitle}</p>
        <p className="card__date">{date}</p>
      </div>
    </div>
  );
}

export default Card;
