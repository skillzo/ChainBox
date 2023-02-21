import React, { Suspense } from "react";

import HashLoader from "react-spinners/HashLoader";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/index.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import Settings from "./Pages/Settings";
import { ContextProvider } from "./Store/AuthContext";
import LoginPage from "./Pages/LoginPage";
import { PrivateRoutes } from "./Layout/ProtectedRoute";
const News = React.lazy(() => import("./Pages/News/News.jsx"));
const NewsInfo = React.lazy(() => import("./Pages/News/NewsInfo.jsx"));
const UserProfile = React.lazy(() => import("./Pages/UserProfile"));
const ErrorPage = React.lazy(() => import("./Pages/Error/404.jsx"));
const Exchange = React.lazy(() => import("./Pages/Exchange"));
const Search = React.lazy(() => import("./Pages/Search"));
const WatchLIst = React.lazy(() => import("./Pages/WatchLIst.jsx"));
const Portfolio = React.lazy(() => import("./Pages/Portfolio"));
const CoinInfo = React.lazy(() => import("./Pages/CoinInfo.jsx"));

function App() {
  return (
    <ContextProvider>
      <Suspense
        fallback={
          <HashLoader
            color="#123783"
            size={150}
            margin="0 auto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        }
      >
        <Routes>
          {/* <Route element={<PrivateRoutes />}> */}
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
          {/* </Route> */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </ContextProvider>
  );
}

export default App;
