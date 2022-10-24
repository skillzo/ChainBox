import React from "react";
import { coindata } from "../coindata";
import Filter from "../Components/Filter/Filter";
import CoinCard from "../Components/Card/Coin/CoinCard";

function WatchLIst() {
  return (
    <>
      <h3>Skillzo Watchlist</h3>
      <Filter />
      {coindata.map((coin) => {
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
          />
        );
      })}
    </>
  );
}

export default WatchLIst;
