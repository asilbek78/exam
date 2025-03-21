import { useEffect, useState } from "react";

export function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error(`HTTP xatosi: ${request.status}`);
        }
        const response = await request.json();
        setData(response);
      } catch (err) {
        console.error("Fetch xatosi:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
