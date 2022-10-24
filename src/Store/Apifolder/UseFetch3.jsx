import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

export default function useFetch3(url, options) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const { input } = useAuth();

  //   ////////////////////////////
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input !== "") {
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
      }
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [input, url]);
  return { data, loading, error };
}
