import React, {
  createContext,
  useState,
  useContext,
  useReducer,
} from "react";

const UserContext = createContext();

const watchListLocalStorage = JSON.parse(
  localStorage.getItem("watchlist") || "[]"
);
const portFolioLocalStorage = JSON.parse(
  localStorage.getItem("portfolio") || "[]"
);
const portFolioAmountLocalStorage = JSON.parse(
  localStorage.getItem("portfolio") || 0
);
const initialState = {
  total: portFolioAmountLocalStorage,
  portfolio: portFolioLocalStorage,
  watchList: watchListLocalStorage,
};

// /////////////////////////////////////
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
        portfolio: [
          ...initialState.portfolio,
          { ...payload.currItem, id: Math.random() },
        ],
        total: initialState.total + payload.price,
      };
    case ACTIONS.ADD_TO_WATCHLIST:
      return {
        ...initialState,
        watchList: [
          ...initialState.portfolio,
          { ...payload.currItem, id: Math.random() },
        ],
      };
    case ACTIONS.DELETE_FROM_PORTFOLIO:
      return {
        ...initialState,
        portfolio: initialState.portfolio.filter((coin) => {
          return coin.id !== payload.currItem;
        }),
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

  const value = {
    state,
    dispatch,
    input,
    setInput,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export const useAuth = () => {
  return useContext(UserContext);
};
