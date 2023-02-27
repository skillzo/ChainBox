import React, { Fragment, useState } from "react";
import Filter from "../Components/Filter/Filter";
import CoinCard from "../Components/Card/Coin/CoinCard";
import Filter2 from "../Components/Filter/Filter2";
import { SCoinCard } from "../Components/Card/Skeletons/SkeletonCard";
import ErrorPage from "./Error/404";
import { useQuery } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";
import Loading from "../Components/Loading/Loading";

function Home() {
  const [token, setToken] = useState([]);
  const url =
    "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=250&order=market_cap_desc";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  // fetcher
  const fetcher = () => {
    return axios.get(url, options);
  };

  // api call for the token
  const {
    data: coinData,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery("tokens", fetcher, {
    select: (data) => {
      const coinData = data?.data;
      return coinData;
    },

    retryOnMount: true,
    refetchOnWindowFocus: false
  });

  console.log("token in homepage", token);

  // loading and error state
  if (isLoading || isFetching)
    return (
      <h2>
        <Loading />
      </h2>
    );
  if (isError && !token)
    return <div className="error-page">{error && <ErrorPage />}</div>;
  return (
    <Fragment>
      <Filter token={token} setToken={setToken} />
      <Filter2
        rank="#"
        name="Name"
        price="Price"
        change="Change"
        holdings="Holdings"
      />
      {/* top 100 mapped here */}
      {coinData &&
        coinData?.map((coin) => {
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
      <ReactQueryDevtools initialIsOpen={true} position={"bottom-right"} />
    </Fragment>
  );
}

export default Home;
