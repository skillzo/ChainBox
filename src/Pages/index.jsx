import React, { Fragment, useState } from "react";
import Filter from "../Components/Filter/Filter";
import CoinCard from "../Components/Card/Coin/CoinCard";
import Filter2 from "../Components/Filter/Filter2";
import { SCoinCard } from "../Components/Card/Skeletons/SkeletonCard";
import ErrorPage from "./Error/404";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import { coins } from "../data/coins";
import { Dropdown, Table } from "antd";
import { useDebounce } from "../Hooks/useDebounce";
import SearchInput from "../Components/Input/SearchInput";
import styles from "../Components/Card/Coin/coincard.module.css";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { coingeckoBaseUrl } from "../utils/variables";

// columns
const columns = [
  {
    title: "#",
    dataIndex: "market_cap_rank",
    key: "market_cap_rank",
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="fc gap-1">
        <img
          src={record?.image}
          alt={`${text} icon`}
          className="w-[25px] h-[25px] rounded-full"
        />

        <div className="">
          <div className="uppercase font-semibold text-sm ">{text}</div>
          <div className=" text-[#59657c] font-semibold text-[11px]">
            ${(record?.market_cap / 1000000000)?.toFixed(2)}Bn
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "current_price",
    key: "current_price",
    render: (text) => (
      <p className="text-sm font-semibold">${text?.toLocaleString()}</p>
    ),
  },
  {
    title: "Change",
    dataIndex: "price_change_percentage_24h",
    key: "price_change_percentage_24h",
    render: (text) =>
      text < 0 ? (
        <div className={`px-2 fc py-1 w-max text-rose-600 bg-rose-50 rounded`}>
          <FaLongArrowAltDown size={11} /> {Math.abs(text?.toFixed(2)) || 0}%
        </div>
      ) : (
        <div
          className={`px-2 fc py-1 w-max text-green-600 bg-green-50 rounded`}
        >
          <FaLongArrowAltUp size={11} /> {text?.toFixed(2) || 0}%
        </div>
      ),
  },
  {
    title: "Holdings",
    dataIndex: "holdings",
    key: "holdings",
    render: (text, record) => (
      <p className="text-xs text-gray-600 font-semibold uppercase">
        {" "}
        0 {record?.name}
      </p>
    ),
  },
];

const order_filter = [
  "market_cap_asc",
  "market_cap_desc",
  "volume_asc",
  "volume_desc",
];

const filter_by_percentage_change = [
  "1h",
  "24h",
  "7d",
  "14d",
  "30d",
  "200d",
  "1y",
];

const no_per_page = ["50", "100", "150", "200", "250"];

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [allCoins, setAllCoins] = useState(coins);
  const [pagination, setPagination] = useState({ start: 1, length: 15 });
  const [filterOption, setFilterOption] = useState({
    order: "market_cap_desc",
    price_change_percentage: "1h",
    per_page: 100,
  });

  // api call for the token
  const debounced_value = useDebounce(searchQuery, 1500);
  const { isLoading, error } = useQuery(
    ["tokens", debounced_value, filterOption],
    async () => {
      return axios.get(`${coingeckoBaseUrl}/coins/markets`, {
        params: {
          vs_currency: "usd",
          page: "1",
          ids: searchQuery,
          per_page: filterOption?.per_page,
          order: filterOption?.order,
          price_change_percentage: filterOption?.price_change_percentage,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        },
      });
    },
    {
      onError: () => {
        setAllCoins(coins);
      },
      onSuccess: (data) => {
        setAllCoins(data?.data);
      },
    }
  );

  if (error) return <div className="error-page">{error && <ErrorPage />}</div>;

  return (
    <div className="py-4">
      {/* // filter here */}
      <div className="fc gap-10">
        <Dropdown
          placement="bottomCenter"
          arrow
          dropdownRender={() => {
            return (
              <div className="bg-white rounded-lg p-3 pr-6 w-max shadow-lg space-y-2 ">
                {order_filter?.map((i, idx) => (
                  <div
                    onClick={() =>
                      setFilterOption({ ...filterOption, order: i })
                    }
                    key={idx}
                    className={`block  w-max ${
                      filterOption?.order === i
                        ? "text-brand-blue font-semibold"
                        : "text-gray-400 "
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
            );
          }}
        >
          <div className="font-semibold border rounded px-4 py-1">
            Order By{" "}
          </div>
        </Dropdown>

        <Dropdown
          placement="bottomCenter"
          arrow
          dropdownRender={() => {
            return (
              <div className="bg-white rounded-lg p-3 pr-6 w-max shadow-lg space-y-2 ">
                {filter_by_percentage_change?.map((i, idx) => (
                  <div
                    onClick={() =>
                      setFilterOption({
                        ...filterOption,
                        price_change_percentage: i,
                      })
                    }
                    key={idx}
                    className={`block w-max ${
                      filterOption?.price_change_percentage === i
                        ? "text-brand-blue font-semibold"
                        : "text-gray-400 "
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
            );
          }}
        >
          <div className="font-semibold border rounded px-4 py-1">
            {filterOption?.price_change_percentage}
          </div>
        </Dropdown>

        <Dropdown
          placement="bottomCenter"
          arrow
          dropdownRender={() => {
            return (
              <div className="bg-white rounded-lg p-3 pr-6 w-max shadow-lg space-y-2 ">
                {no_per_page?.map((i, idx) => (
                  <div
                    onClick={() =>
                      setFilterOption({
                        ...filterOption,
                        per_page: i,
                      })
                    }
                    key={idx}
                    className={`block  w-max ${
                      filterOption?.per_page === i
                        ? "text-brand-blue font-semibold"
                        : "text-gray-400 "
                    }`}
                  >
                    Top {i}
                  </div>
                ))}
              </div>
            );
          }}
        >
          <div className="font-semibold border rounded px-4 py-1">
            Top {filterOption?.per_page}
          </div>
        </Dropdown>
      </div>

      <div className=" w-full md:w-[250px] my-5 ">
        <SearchInput
          placeholder="Search crypto name"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPagination({
              ...pagination,
              page: 1,
              pageSize: 15,
            });
          }}
        />
      </div>

      <div className="overflow-x-scroll md:overflow-auto no-scrollbar">
        <div className=" w-full min-w-max md:w-auto">
          <Table
            dataSource={allCoins}
            columns={columns}
            loading={isLoading}
            rowKey="id"
            pagination={false}
            onRow={(record) => ({
              onClick: () => {
                navigate(`/CoinInfo/${record?.id}`);
              },
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
