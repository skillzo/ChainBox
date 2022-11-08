import { useEffect, useState } from "react";

export default function useFetch2() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };
  const url = `https://newscatcher.p.rapidapi.com/v1/search?q=crypto&lang=en&sort_by=relevancy&page=1&media=True`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      async function getdata() {
        setLoading(true);
        try {
          const response = await fetch(url, options);
          if (response.status !== 200) {
            throw new Error(`This is an Api Error: ${response.status}`);
          } else {
            var cData = await response.json();
            console.log(response);
            setData(cData?.articles);
            setError("");
          }
        } catch (e) {
          setError(e.message);
          setData("");
        } finally {
          setLoading(false);
        }
      }
      getdata();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, []);

  const newData = [];
  for (const key in data) {
    newData.push({
      id: data[key]._id,
      image:
        data[key].media ||
        "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTAvOWY4M2RiMTctYjI5ZC00MjUxLTgyYWEtM2U4NDIzNjA2ZGEzLmpwZw==.jpg",
      published_date: data[key].published_date.slice(0, 10),
      published_time: data[key].published_date.slice(11, 16),
      title: data[key].title,
      summary: data[key].summary,
      link: data[key].link,
      author: data[key].author || "Skillzo",
      category: data[key].topic.toUpperCase(),
      copyright: data[key].rights,
    });
  }
  return { newData, loading, error };
}
