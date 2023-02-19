import React, { Fragment } from "react";
import Filter from "../Components/Filter/Filter";
import CoinCard from "../Components/Card/Coin/CoinCard";
import Filter2 from "../Components/Filter/Filter2";
import useFetch from "../Hooks/UseFetch";
import { SCoinCard } from "../Components/Card/Skeletons/SkeletonCard";
import ErrorPage from "./Error/404";

function Home() {
  const url =
    "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  const { data: coinData, loading, error } = useFetch(url, options);
  return (
    <Fragment>
      <Filter />
      <Filter2
        rank="#"
        name="Name"
        price="Price"
        change="Change"
        holdings="Holdings"
      />
      <div className="skeleton-loading">{loading && <SCoinCard />}</div>
      <div className="error-page">{error && <ErrorPage />}</div>

      {coinData &&
        coinData.map((coin) => {
          return (
            <CoinCard
              key={coin.id}
              id={coin.id}
              rank={coin.market_cap_rank}
              icon={coin.image}
              coinName={coin.symbol}
              mkCap={coin.market_cap}
              price={coin.current_price}
              change={coin.market_cap_change_percentage_24h}
              symbol={coin.symbol}
              currItem={coin}
            />
          );
        })}
    </Fragment>
  );
}

export default Home;
