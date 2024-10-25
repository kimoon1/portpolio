/**

import { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(endpoint);
      setData(result);
      setLoading(false);
    };

    getData();
  }, [endpoint]);

  return { data, loading };
};

 */