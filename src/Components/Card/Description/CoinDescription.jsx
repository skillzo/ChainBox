import React from "react";
import styles from "./coindescription.module.css";
import { v4 as uuidv4 } from "uuid";
import { Parser } from 'html-to-react'

export default function CoinDescription({
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
  const links = [
    {
      homepage: "Homepage",
      link: homepage,
    },
    {
      homepage: "Scan:",
      coinName: name,
      link: blockchain_link,
    },
    {
      homepage: "Explorer:",
      coinName: name,
      link: forum,
    },
  ];

  const socialPages = [
    {
      homepage: "Official Forum:",
      link: forum,
    },
    {
      homepage: "Discord:",
      link: discord,
    },
    {
      homepage: "Subreddit:",
      link: reddit,
    },
  ];

  const info = [
    {
      tag: "Twitter Followers",
      info: twitter_stat,
    },
    {
      tag: "Reddit Followers",
      info: subreddit_stat,
    },
    {
      tag: "Telegram Followers",
      info: telegram_stat,
    },
    {
      tag: "Github Subscribers",
      info: github_stat,
    },
  ];


  console.log(description)
  return (
    <div className={styles["coindescription-container"]}>
      <h2>About {name}</h2>
      <div className={styles["coindescription-description"]}>
        <p style={{ fontWeight: "700" }}>What is {name}?</p>
        <div>{Parser().parse(description)}</div>
      </div>

      <div className={styles["description-link description-section"]}>
        {/* Section 1: Links */}
        <div className={styles["description-section1"]}>
          <h3>Links</h3>
          {links.map((item) => {
            return (
              <CoinLinks
                key={uuidv4()}
                tag={item.homepage}
                homeLink={item.link}
                coinName={item.coinName}
              />
            );
          })}
        </div>

        {/* links to social groups  */}
        <div className="description-section1">
          <h3>Social Groups</h3>
          {socialPages.map((item) => {
            return (
              <CoinLinks
                key={uuidv4()}
                tag={item.homepage}
                homeLink={item.link}
                coinName={item.coinName}
              />
            );
          })}
        </div>

        {/* Community info */}
        <div className={styles["description-section1"]}>
          <h3>Community Info</h3>
          {info.map((item) => {
            return (
              <CommunityInfo key={uuidv4()} tag={item.tag} info={item.info} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const CoinLinks = ({ homeLink, tag, coinName }) => {
  return (
    <div className={styles["description-section__main"]}>
      <h3 className={styles["description-section__name"]}>
        {coinName} {tag}
      </h3>
      <div className={styles["description-section__link"]}>
        <a href={homeLink}>{homeLink || 'Not Available'}</a>
      </div>
    </div>
  );
};
export const CommunityInfo = ({ tag, info }) => {
  return (
    <div className={styles["description-section__main"]}>
      <h3 className={styles["description-section__name"]}>{tag}</h3>
      <em className={styles["description-section__info"]}>{info}</em>
    </div>
  );
};
