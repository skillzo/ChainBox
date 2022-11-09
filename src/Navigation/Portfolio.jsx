import React, { useEffect } from "react";
import CoinCard2 from "../Components/Card/Coin/CoinCard2";
import PortFolioHeader from "../Components/Header/PortFolioHeader";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import PortfolioFilter from "../Components/Filter/PortfolioFilter";
import Button from "../Components/Button/Button";
import { useAuth } from "../Store/Context/AuthContext";
import { Link } from "react-router-dom";
import ChartJS from "../Components/Card/Charts/Chartjs/ChartJs";

function Portfolio() {
  const { state } = useAuth();
  console.log(state.total);
  useEffect(() => {
    localStorage.setItem("portfolio", JSON.stringify(state.portfolio));
    localStorage.setItem("total", state.total);
  }, [state.portfolio, state.total]);
  return (
    <>
      <Navbar2 pageName=" Skillzo's Portfolio" />
      <PortFolioHeader />
      <PortfolioFilter />
      <ChartJS />
      {state.portfolio?.map((coin) => {
        console.log(coin);
        return (
          <CoinCard2
            key={coin.id}
            id={coin.id}
            icon={coin.image.large}
            coinName={coin.name}
            price={coin.market_data.current_price.usd}
            change={coin.market_data.price_change_percentage_24h}
            symbol={coin.symbol}
            currItem={coin}
          />
        );
      })}
      <Link to="/">
        <Button bgColor="#487bfb" btnColor="#f4f5f6">
          Add New Asset
        </Button>
      </Link>
      <Footer />
    </>
  );
}

export default Portfolio;
