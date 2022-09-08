import React, { Fragment } from "react";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import MainHome from "./MainHome";
import News from "./News";
import "./navigation.css";

function Home() {
  return (
    <>
      <div className="container">
        <Profile />
        <div className="outlet">
          <News />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
