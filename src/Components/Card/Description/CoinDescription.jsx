import React from "react";
import "./coindescription.css";

function CoinDescription({
  name,
  description,
  homepage,
  blockchain_link,
  forum,
  announcement,
  discord,
  reddit,
  twitter_stat,
  subreddit_stat,
  telegram_stat,
  github_stat,
  blockchain_Explorer,
}) {
  return (
    <div className="coindescription-container">
      <h2>About {name}</h2>
      <div className="coindescription-description">
        <p>What is {name}?</p>
        <p>{description}</p>
      </div>

      <div className="description-link description-section">
        <div className="description-section1">
          <h3>Links</h3>
          <div className="description-section__main">
            <div className="description-section__name">Homepage:</div>
            <div className="description-section__link">
              <a href={homepage}>{homepage}</a>
            </div>
          </div>

          <div className="description-section__main">
            <div className="description-section__name">{name} Scan:</div>
            <div className="description-section__link">
              <a href={blockchain_link}>{blockchain_link}</a>
            </div>
          </div>
          <div className="description-section__main">
            <div className="description-section__name">{name} Explorer:</div>
            <div className="description-section__link">
              <a href={blockchain_Explorer}>{blockchain_Explorer}</a>
            </div>
          </div>
        </div>
        <div className="description-section1">
          <h3>Community</h3>
          <div className="description-section__main">
            <div className="description-section__name">Official Forum:</div>
            <div className="description-section__link">
              <a href={forum}>https://docs.solana.com/</a>
            </div>
          </div>
          <div className="description-section__main">
            <div className="description-section__name">
              Announcement Channel:
            </div>
            <div className="description-section__link">
              <a href={announcement}>Medium</a>
            </div>
          </div>
          <div className="description-section__main">
            <div className="description-section__name">Discord Group:</div>
            <div className="description-section__link">
              <a href={discord}>Discord</a>
            </div>
          </div>
          <div className="description-section__main">
            <div className="description-section__name">Subreddit:</div>
            <div className="description-section__link">
              <a href={reddit}>Subreddit</a>
            </div>
          </div>
        </div>

        <div className="description-section1">
          <h3>Community Stat</h3>
          <div className="description-section__main">
            <div className="description-section__name">Twitter Followers:</div>
            <div className="description-section__link"> {twitter_stat}</div>
          </div>
          <div className="description-section__main">
            <div className="description-section__name">Reddit Subscribers:</div>
            <div className="description-section__link"> {subreddit_stat}</div>
          </div>
          <div className="description-section__main">
            <div className="description-section__name">Telegram Users:</div>
            <div className="description-section__link"> {telegram_stat}</div>
          </div>
          <div className="description-section__main">
            <div className="description-section__name">Github Subscribers:</div>
            <div className="description-section__link"> {github_stat}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinDescription;
