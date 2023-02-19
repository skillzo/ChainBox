import React from "react";
import Profile from "../Components/Profile/Profile";
import Footer from "../Components/Footer/Footer";
import "../Pages/navigation.css";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Wrapper from "../Components/Wrapper/Wrapper";

function Home() {
  return (
    <>
      <div className="container">
        <div className="navigation-header">
          <Profile />
          <Navbar />
        </div>
        <div className="navigation-body">
          <Wrapper>
            <Outlet />
          </Wrapper>
        </div>
        <Footer />
      </div>
      <div className="on-desktop">
        This app is optimized for just mobile please view on a mobile device
      </div>
    </>
  );
}

export default Home;
