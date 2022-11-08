import React, { useEffect } from "react";
import Filter from "../Components/Filter/Filter";
import CoinCard from "../Components/Card/Coin/CoinCard";
import { useAuth } from "../Store/Context/AuthContext";

function WatchLIst() {
  const { currentUser, state } = useAuth();

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
  }, [state.watchList]);

  console.log(state.watchList);
  return (
    <div className="watchlist-container">
      <h3> {currentUser.displayName || "Skillzo"}'s Watchlist</h3>
      <Filter />
      {state.watchList.map((coin) => {
        return (
          <CoinCard
            key={coin.id}
            id={coin.id}
            rank={coin.market_cap_rank}
            icon={coin.image.large}
            coinName={coin.symbol}
            mkCap={coin.market_cap}
            price={coin?.market_data.current_price.usd}
            change={coin.market_data.market_cap_change_percentage_24h}
            symbol={coin.symbol}
          />
        );
      })}
    </div>
  );
}

export default WatchLIst;
