import React from "react";
import "./newscard.css";
import { Link } from "react-router-dom";

function NewsCard({ icon, title, author, date, id }) {
  return (
    <>
      <Link to={`/newsinfo/${id}`}>
        <div className="news-card">
          <div className="news-card-image">
            <img src={icon} alt="" />
          </div>
          <div className="news-card__details">
            <p>{title}</p>
            <div className="news-card__info">
              <h3>{author}</h3>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default NewsCard;
