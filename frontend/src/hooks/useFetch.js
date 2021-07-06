import { useEffect, useState } from "react";
import callApi from "../utils/request";

const useFetch = (url, data = null, type = "GET") => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      if (url) {
        const result = await callApi(url, data, type);
        if (result.success) {
          setResponse(result.data);
        } else {
          setError(result.error);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, [data, type, url]);

  return { response, error, loading };
};

export default useFetch;
