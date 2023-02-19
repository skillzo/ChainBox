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

// import { useAuth } from "../Store/Context/AuthContext";

function Search() {
  // const { input } = useAuth();
  // ///////////////////////////////////////////////
  const url =
    "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  // const options2 = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "1b4a0c0127mshd14c854b5410d89p1cbec6jsn0264abe15bf4",
  //     "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  //   },
  // };
  // const url2 = `https://coingecko.p.rapidapi.com/exchanges/${input}`;

  // const options3 = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "1b4a0c0127mshd14c854b5410d89p1cbec6jsn0264abe15bf4",
  //     "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  //   },
  // };
  // const url3 = `https://coingecko.p.rapidapi.com/coins/${input}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`;
  // /////////////////////////////////

  const { data } = useFetch(url, options);
  const { newData, loading } = useFetch2();
  // const { data: quaryExchangeData } = useFetch3(url2, options2);
  // const { data: quaryCoinData } = useFetch3(url3, options3);
  // /////////////////////////////

  // const quaryExchangeNewData = quaryExchangeData?.filter((ex) => {
  //   return ex.name.toLowerCase().includes(input.trim().toLowerCase());
  // });
  // const quaryCoinNewData = quaryCoinData?.filter((coin) => {
  //   return coin.id.toLowerCase() === input.toLowerCase();
  // });
  // console.log(quaryExchangeNewData);
  return (
    <Fragment>
      <Wrapper>
        <SearchBar />
        <h3>Trending</h3>
        {/* {loading && <SBasicCard />} */}
        <div className="trending-container">
          {data &&
            data?.slice(0, 10).map((coin) => {
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
        <h3>News</h3>
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
