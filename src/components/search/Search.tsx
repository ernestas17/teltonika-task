import { useState } from 'react';

// Styles
import {
  SearchContainer,
  Logo,
  Results,
  InputContainer,
  Input,
} from './Search.style';

// Assets
const searchIcon = (
  <svg
    fill='#5a71e4'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 50 50'
    width='16px'
    height='16px'
  >
    <path d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z' />
  </svg>
);

// COMPONENT
export const Search: React.FC = ({
  AllRockets,
  results,
  setDisplayRockets,
}) => {
  // -- state
  const [searchValue, setSearchValue] = useState('');

  // -- custom funtions
  const filterRockets = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    const rocketsAfterSearch = AllRockets.filter((rocket) => {
      const nameRule = rocket.rocket_name
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const diameterRule = ('' + rocket.diameter.meters)
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const heightRule = ('' + rocket.height.meters)
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const massRule = ('' + rocket.mass.kg)
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const costPerLaunchRule = ('' + rocket.cost_per_launch)
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      // -- search works by filtering all data in every column (could be easily updated by removeing one of rules)
      return (
        nameRule || diameterRule || heightRule || massRule || costPerLaunchRule
      );
    });

    setDisplayRockets(rocketsAfterSearch);
  };

  return (
    <SearchContainer>
      <Logo>SpaceX rockets</Logo>
      <Results>
        {results} {results === 1 ? 'Result' : 'Results'}
      </Results>
      <InputContainer>
        {searchIcon}
        <Input
          placeholder='Search'
          value={searchValue}
          onChange={(e) => filterRockets(e)}
        />
      </InputContainer>
    </SearchContainer>
  );
};
