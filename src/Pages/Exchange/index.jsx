import React from "react";
import Coincard3 from "../../Components/Card/Coin/CoinCard3";
import { SCoinCard } from "../../Components/Card/Skeletons/SkeletonCard";
import Filter2 from "../../Components/Filter/Filter2";
import useFetch from "../../Hooks/UseFetch";
import ErrorPage from "../Error/404";

function Exchange() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };
  const url = "https://coingecko.p.rapidapi.com/exchanges";

  const { data: exchangeData, loading, error } = useFetch(url, options);
  return (
    <>
      <Filter2
        rank="#"
        name="Exchange"
        price="24Vol(BTC)"
        change="24hVol(%)"
        holdings="Score"
      />
      {exchangeData &&
        exchangeData?.map((ex) => {
          return (
            <Coincard3
              key={ex.id}
              id={ex.id}
              rank={ex.trust_score_rank}
              icon={ex.image}
              exchangeName={ex.name}
              tVol={ex.trade_volume_24h_btc}
              trustScore={ex.trust_score}
            />
          );
        })}
      <div className="skeleton-loading">{loading && <SCoinCard />}</div>
      <div className="error-page">{error && <ErrorPage />}</div>
    </>
  );
}

export default Exchange;
