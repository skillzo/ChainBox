import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/index.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import News from "./Pages/News/News.jsx";
import NewsInfo from "./Pages/News/NewsInfo.jsx";
import CoinInfo from "./Pages/CoinInfo.jsx";
import Portfolio from "./Pages/Portfolio";
import WatchLIst from "./Pages/WatchLIst.jsx";
import Search from "./Pages/Search";
import Exchange from "./Pages/Exchange";
import Settings from "./Pages/Settings";
import { ContextProvider } from "./Store/AuthContext";
import ErrorPage from "./Pages/Error/404.jsx";
import UserProfile from "./Pages/UserProfile";
import LoginPage from "./Pages/LoginPage";
import { PrivateRoutes } from "./Layout/ProtectedRoute";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/watchlist" element={<WatchLIst />} />
            <Route path="/news" element={<News />} />
            <Route path="/exchange" element={<Exchange />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/CoinInfo/:id" element={<CoinInfo />} />
          <Route path="/newsinfo/:id" element={<NewsInfo />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
