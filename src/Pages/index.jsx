import React, { Fragment, useState } from "react";
import Filter from "../Components/Filter/Filter";
import CoinCard from "../Components/Card/Coin/CoinCard";
import Filter2 from "../Components/Filter/Filter2";
import { SCoinCard } from "../Components/Card/Skeletons/SkeletonCard";
import ErrorPage from "./Error/404";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Components/Loading/Loading";

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
    staleTime: "Infinity",
    cacheTime: "Infinity",
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
  const token = coinData?.data;

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
      <Filter />

      <Filter2
        rank="#"
        name="Name"
        price="Price"
        change="Change"
        holdings="Holdings"
      />

      {/* top 100 mapped here */}
      {token &&
        token?.map((coin) => {
          return (
            <CoinCard
              key={coin?.id}
              id={coin?.id}
              rank={coin?.market_cap_rank}
              icon={coin?.image}
              coinName={coin?.name}
              mkCap={coin?.market_cap}
              price={coin?.current_price}
              change={coin?.market_cap_change_percentage_24h}
              symbol={coin?.symbol}
              currItem={coin}
            />
          );
        })}
    </Fragment>
  );
}

export default Home;

const rr = [
  {
    id: "ether-fi-staked-eth",
    symbol: "eeth",
    name: "ether.fi Staked ETH",
    image:
      "https://assets.coingecko.com/coins/images/33049/large/ether.fi_eETH.png?1700473063",
    current_price: 3669.92,
    market_cap: 1432574823,
    market_cap_rank: 82,
    fully_diluted_valuation: 2900209385,
    total_volume: 253259,
    high_24h: 4028.37,
    low_24h: 3536.34,
    price_change_24h: -213.9750983614631,
    price_change_percentage_24h: -5.50929,
    market_cap_change_24h: 92409753,
    market_cap_change_percentage_24h: 6.8954,
    circulating_supply: 390737.02089038485,
    total_supply: 791036.640119919,
    max_supply: null,
    ath: 4040.42,
    ath_change_percentage: -9.11779,
    ath_date: "2024-03-11T14:17:18.791Z",
    atl: 2155.76,
    atl_change_percentage: 70.33589,
    atl_date: "2024-02-08T11:26:30.368Z",
    roi: null,
    last_updated: "2024-03-15T08:28:22.079Z",
  },
];
