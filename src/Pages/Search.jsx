import React, { Fragment } from "react";
import Trending from "../Components/Card/Coin/Trending";
import NewsCard from "../Components/Card/News/NewsCard";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/Search/SearchBar";
import Wrapper from "../Components/Wrapper/Wrapper";
import useFetch2 from "../Hooks/UseFetch2";
import useFetch from "../Hooks//UseFetch";

import {
  // SBasicCard,
  SCoinCard,
} from "../Components/Card/Skeletons/SkeletonCard";
import { coins } from "../data/coins";

function Search() {
  const url =
    "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  const { data } = useFetch(url, options);
  const { newData, loading } = useFetch2();

  return (
    <Fragment>
      <Wrapper>
        <SearchBar />
        <h3 className="font-semibold text-gray-800 my-5">Trending</h3>
        {/* {loading && <SBasicCard />} */}
        <div className="trending-container">
          {coins?.slice(0, 10).map((coin) => {
            return (
              <Trending
                key={coin.id}
                id={coin.id}
                icon={coin.image}
                coinName={coin.id}
                symbol={coin.symbol}
              />
            );
          })}
        </div>

        <h3 className="font-semibold text-gray-800 my-10">News</h3>

        {loading && <SCoinCard />}

        {newData &&
          newData.map((news) => {
            return (
              <NewsCard
                key={news.id}
                id={news.id}
                icon={news.image}
                title={news.title}
                author={news.author}
                date={news.published_time}
              />
            );
          })}
      </Wrapper>
      <Footer />
    </Fragment>
  );
}

export default Search;
