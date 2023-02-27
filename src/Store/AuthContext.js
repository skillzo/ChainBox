import React, { createContext, useState, useContext, useReducer } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

// cache in local storage
const watchListLocalStorage = JSON.parse(
  localStorage.getItem("watchlist") || "[]"
);
const portFolioLocalStorage = JSON.parse(
  localStorage.getItem("portfolio") || "[]"
);
const portFolioAmountLocalStorage = JSON.parse(
  localStorage.getItem("total") || 0
);
const initialState = {
  total: portFolioAmountLocalStorage,
  portfolio: portFolioLocalStorage,
  watchList: watchListLocalStorage,
};

// reducer actions
export const ACTIONS = {
  ADD_TO_PORTFOLIO: "add-to-portfolio",
  DELETE_FROM_PORTFOLIO: "remove-from-porfolio",
  ADD_TO_WATCHLIST: "add-to-watchlist",
  DELETE_FROM_WATCHLIST: "remove-from-watchlist",
  UPDATE_PORTFOLIO_TOTAL: " update-portfolio-total",
};
// //////////////////////////////////////
const reducer = (initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TO_PORTFOLIO:
      return {
        ...initialState,
        portfolio: [...initialState.portfolio, { ...payload.currItem }],
        total: (initialState.total += payload.price),
      };
    case ACTIONS.ADD_TO_WATCHLIST:
      return {
        ...initialState,
        watchList: [
          ...initialState.portfolio,
          { ...payload.currItem, id: Math.random(), checked: true },
        ],
      };
    case ACTIONS.DELETE_FROM_PORTFOLIO:
      return {
        ...initialState,
        portfolio: initialState.portfolio.filter((coin) => {
          return coin.id !== payload.currItem;
        }),
        total: (initialState.total -= payload.price),
      };
    case ACTIONS.DELETE_FROM_WATCHLIST:
      return {
        ...initialState,
        watchList: initialState.watchList.filter((coin) => {
          return coin.id !== payload.currItem;
        }),
      };
    default:
      console.log(`${type} is not defined`);
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("binance");
  const [checked, setChecked] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [currentUser, setCurrentUser] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // firebase functions
  const logInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        navigate("/");
        const user = result?.user;
        setCurrentUser(user);
        localStorage.setItem("isAuth", true);
      })
      .catch((e) => {
        setLoginError(e.message);
        setCurrentUser("");
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setIsAuth(false);
        localStorage.setItem("isAuth", false);
        navigate("/login");
      })
      .catch((e) => {
        console.log("couldnt sign out");
        console.log(e.message);
      });
    localStorage.clear();
  };

  const value = {
    state,
    dispatch,
    input,
    setInput,
    isAuth,
    setIsAuth,
    currentUser,
    setCurrentUser,
    logInWithGoogle,
    logOut,
    loginError,
    checked,
    setChecked,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export const useAuth = () => {
  return useContext(UserContext);
};
