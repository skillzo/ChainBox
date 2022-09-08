import React from "react";
import "./newscard.css";

function NewsCard() {
  return (
    <>
      <div className="news-card">
        <div className="news-card-image">
          <img
            src="https://media.istockphoto.com/photos/stage-startup-ceo-and-hardware-engineer-present-new-product-speakers-picture-id1226991719?b=1&k=20&m=1226991719&s=170667a&w=0&h=VGvz6f7ZHcsMve2_YVnPefc3AGYPVFXPGnqsP1c1jHM="
            alt=""
          />
        </div>
        <div className="news-card__details">
          <p>Celsius Resembled Ponzi Scheme at Times, Vermont Regulatir Says</p>
          <div className="news-card__info">
            <h3>By Shaurya Malwa</h3>
            <p>Sep 7 at 9:29am</p>
          </div>
        </div>
      </div>

      {/* ////////////// */}
      <div className="news-card">
        <div className="news-card-image">
          <img src="" alt="" />
        </div>
        <div className="news-card__details">
          <p>Celsius Resembled Ponzi Scheme at Times, Vermont Regulatir Says</p>
          <div className="news-card__info">
            <h3>By Shaurya Malwa</h3>
            <p>Sep 7 at 9:29am</p>
          </div>
        </div>
      </div>
      <div className="news-card">
        <div className="news-card-image">
          <img src="" alt="" />
        </div>
        <div className="news-card__details">
          <p>Celsius Resembled Ponzi Scheme at Times, Vermont Regulatir Says</p>
          <div className="news-card__info">
            <h3>By Shaurya Malwa</h3>
            <p>Sep 7 at 9:29am</p>
          </div>
        </div>
      </div>
      <div className="news-card">
        <div className="news-card-image">
          <img src="" alt="" />
        </div>
        <div className="news-card__details">
          <p>Celsius Resembled Ponzi Scheme at Times, Vermont Regulatir Says</p>
          <div className="news-card__info">
            <h3>By Shaurya Malwa</h3>
            <p>Sep 7 at 9:29am</p>
          </div>
        </div>
      </div>
      <div className="news-card">
        <div className="news-card-image">
          <img src="" alt="" />
        </div>
        <div className="news-card__details">
          <p>Celsius Resembled Ponzi Scheme at Times, Vermont Regulatir Says</p>
          <div className="news-card__info">
            <h3>By Shaurya Malwa</h3>
            <p>Sep 7 at 9:29am</p>
          </div>
        </div>
      </div>
      {/* ////////////////// */}
    </>
  );
}

export default NewsCard;
