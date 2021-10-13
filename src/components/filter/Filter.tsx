import { useState, useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';

// Styles
import { FilterWrapper, FilterContainer } from './Filter.style';

// Components
import { Search } from '../search/Search';
import { Table } from '../table/Table';

// Typescript
// -- interfaces
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

// COMPONENT
export const Filter: React.FC = () => {
  // -- state
  const [displayRockets, setDisplayRockets] = useState<Rocket[]>([]);

  const { data, isLoading, error } = useFetch(
    'https://api.spacexdata.com/v3/rockets'
  );

  // -- side effects
  useEffect(() => {
    setDisplayRockets(data);
  }, [data]);

  return (
    <FilterWrapper>
      <FilterContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <Search
              results={displayRockets ? displayRockets.length : 0}
              AllRockets={data}
              setDisplayRockets={setDisplayRockets}
            />
            <Table
              displayRockets={displayRockets}
              setDisplayRockets={setDisplayRockets}
            />
          </>
        )}
      </FilterContainer>
    </FilterWrapper>
  );
};
