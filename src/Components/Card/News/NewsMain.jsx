import React from "react";
import "./newsmain.css";
function NewsMain({title, icon, source, date, description}) {
  return (
    <>
      <div className="new-main__container">
        <div className="news-main__image">
          <img
            src={icon}
            alt=""
          />
        </div>
        <div className="news-main__details">
          <div className="news-main__heading">
            <h2>
             {title}
            </h2>
            <div className="news-main__autor">
              <p>{source}</p>
              <p>{date}</p>
            </div>
          </div>
          <div className="news-main__content">
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsMain;
