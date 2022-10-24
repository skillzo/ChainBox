import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Navigation/Home";
import NewsInfo from "./Navigation/NewsInfo";
import News from "./Navigation/News";
import CardInfo from "./Navigation/CardInfo";
import Portfolio from "./Navigation/Portfolio";
import WatchLIst from "./Navigation/WatchLIst";
import Search from "./Navigation/Search";
import Exchange from "./Navigation/Exchange";
import MainHome from "./Navigation/MainHome";
import Settings from "./Navigation/Settings";
import { ContextProvider } from "./Store/Context/AuthContext";
import ErrorPage from "./Navigation/ErrorPage";
import UserProfile from "./Navigation/UserProfile";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MainHome />} />
            <Route path="/watchlist" element={<WatchLIst />} />
            <Route path="/news" element={<News />} />
            <Route path="/exchange" element={<Exchange />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/cardinfo/:id" element={<CardInfo />} />
          <Route path="/newsinfo/:id" element={<NewsInfo />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
