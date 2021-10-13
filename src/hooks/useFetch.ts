import { useState, useEffect } from 'react';
import axios from 'axios';

// Typescript
// -- interface
interface Rocket {
  rocket_name: string;
  diameter: {
    meters: number;
  };
  height: {
    meters: number;
  };
  mass: {
    kg: number;
  };
  cost_per_launch: number;
}

interface Response {
  data: any;
}

const useFetch = (endpoint: string) => {
  // Hooks
  // -- state
  const [data, setData] = useState<Rocket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // -- side effects
  useEffect(() => {
    axios
      .get(endpoint)
      .then((data: Response) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
