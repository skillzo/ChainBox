import React from "react";
import { useParams } from "react-router-dom";
import CoinHeader from "../Components/Header/CoinHeader";
import ChartCard from "../Components/Card/Charts/ChartCard";
import StatCard from "../Components/Card/Stat/StatCard";
import Button from "../Components/Button/Button";
import Navbar3 from "../Components/Navbar/Navbar3";
import Wrapper from "../Components/Wrapper/Wrapper";
import useFetch from "../Store/Apifolder/UseFetch";
import { ACTIONS, useAuth } from "../Store/Context/AuthContext";
import NewsCard from "../Components/Card/News/NewsCard";
import CoinDescription from "../Components/Card/Description/CoinDescription";

function CardInfo() {
  const { id } = useParams();
  const url = `https://coingecko.p.rapidapi.com/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };
  const url2 = `https://newscatcher.p.rapidapi.com/v1/search?q=${id}&lang=en&sort_by=relevancy&page=1&media=True`;
  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1b4a0c0127mshd14c854b5410d89p1cbec6jsn0264abe15bf4",
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };
  const { data: sData } = useFetch(url, options);
  const { data: sDataNews } = useFetch(url2, options2);

  const { dispatch, state } = useAuth();

  // ////////////////////////////
  const addToPortfolio = (currItem) => {
    const coinInPortfolio = state.portfolio.map((coin) => {
      return coin.id;
    });
    console.log(coinInPortfolio);
    if (coinInPortfolio.includes(id)) {
      console.log("already have coin");
      return;
    } else {
      console.log(" adding coin");
      dispatch({
        type: ACTIONS.ADD_TO_PORTFOLIO,
        payload: {
          currItem: currItem,
          price: currItem?.market_data?.current_price.usd * 10,
        },
      });
    }
  };
  return (
    <Wrapper>
      <div className="outlet">
        <Navbar3 currItem={sData} />
        <CoinHeader
          coinName={sData?.name}
          price={sData?.market_data.current_price.usd}
          changeCur={sData?.market_data.price_change_24h_in_currency.usd}
          changePercent={sData?.market_data.price_change_percentage_24h}
        />
        <ChartCard sSymbol={`${sData?.symbol}`} />
        <StatCard
          key={sData?.id}
          id={sData?.id}
          mkCap={sData?.market_data.market_cap.usd}
          vol={sData?.market_data.total_volume.usd}
          mxSupply={sData?.market_data.max_supply}
          symbol={sData?.symbol}
          ath={sData?.market_data.ath.usd}
          atl={sData?.market_data.atl.usd}
          fully_dil_mkCap={sData?.market_data.fully_diluted_valuation.usd}
          circulating_supply={sData?.market_data.circulating_supply}
          total_supply={sData?.market_data.total_supply}
          roi={sData?.market_data.roi || "100"}
        />
        <CoinDescription
          name={sData?.name}
          description={sData?.description.en}
          homepage={sData?.links.homepage[0]}
          blockchain_link={sData?.links.blockchain_site[0]}
          blockchain_Explorer={sData?.links.blockchain_site[1]}
          forum={sData?.links.official_forum_url[0]}
          announcement={sData?.links.announcement_url[0]}
          discord={sData?.links.chat_url[0]}
          reddit={sData?.links.subreddit_url}
          twitter_stat={sData?.community_data.twitter_followers}
          subreddit_stat={sData?.community_data.reddit_subscribers}
          telegram_stat={sData?.community_data.telegram_channel_user_count}
          github_stat={sData?.developer_data.subscribers}
        />
        <h3>Latest News</h3>
        <div className="news-card__container">
          {sDataNews &&
            sDataNews?.articles.slice(0, 5).map((news) => {
              return (
                <NewsCard
                  key={news._id}
                  id={news._id}
                  icon={news.media}
                  title={news.title}
                  author={news.author}
                  date={news.published_date.slice(11, 15)}
                />
              );
            })}
        </div>
        <div onClick={() => addToPortfolio(sData)}>
          <Button bgColor={"black"} btnColor={"#f4f5f6"}>
            Add To Portfolio
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default CardInfo;
