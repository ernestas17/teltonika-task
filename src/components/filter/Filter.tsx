import { useState, useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';

// Styles
import { FilterWrapper, FilterContainer } from './Filter.style';

// Components
import { Search } from '../search/Search';
import { Table } from '../table/Table';

// COMPONENT
export const Filter: React.FC = () => {
  // -- state
  const [displayRockets, setDisplayRockets] = useState();

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
              results={displayRockets.length}
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
