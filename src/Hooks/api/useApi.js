import axios from "axios";
import { useQuery } from "react-query";

export default function useApi({ url, options }) {
  const { data, isLoading } = useQuery("key", async () => {
    return axios.get(url, options);
  });
  if (isLoading) return <h2>Loading.....</h2>;
  return { data, isLoading };
}
