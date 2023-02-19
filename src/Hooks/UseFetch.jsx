import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

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
            setData(cData);
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
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, []);
  return { data, loading, error };
}
