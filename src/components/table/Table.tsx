import { ReactNode, useRef } from 'react';

// Styles
import { TableContainer, StyledTable, NoResultsMessage } from './Table.style';

// Assets
const sortUp = (
  <svg
    fill='#676C7E'
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 24 24'
  >
    <path d='M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z' />
  </svg>
);

const sortDown = (
  <svg
    fill='#676C7E'
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 24 24'
  >
    <path d='M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-12h-8v-2h8v2zm2-6h-10v2h10v-2zm-4 8h-6v2h6v-2zm-2 4h-4v2h4v-2zm-2 4h-2v2h2v-2z' />
  </svg>
);

// Typescript
// -- interfaces
interface Rocket {
  id?: number;
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

interface Props {
  displayRockets: Rocket[];
  setDisplayRockets: (rockets: Rocket[]) => void;
}

// -- types
type sortBy = string;

// COMPONENT
export const Table: React.FC<Props> = ({
  displayRockets,
  setDisplayRockets,
}) => {
  // -- custom funtions

  const sortRockets = (sortBy: sortBy) => {
    let sortedRockets = displayRockets;

    switch (sortBy) {
      case 'diameter': {
        sortedRockets = [...displayRockets].sort(
          (a, b) => b.diameter.meters - a.diameter.meters
        );
        break;
      }
      case 'height': {
        sortedRockets = [...displayRockets].sort(
          (a, b) => b.height.meters - a.height.meters
        );
        break;
      }
      case 'mass': {
        sortedRockets = [...displayRockets].sort(
          (a, b) => b.mass.kg - a.mass.kg
        );
        break;
      }
      case 'cost_per_launch': {
        sortedRockets = [...displayRockets].sort(
          (a, b) => b.cost_per_launch - a.cost_per_launch
        );
        break;
      }
    }

    setDisplayRockets(sortedRockets);
  };

  const table = (
    <StyledTable>
      <thead>
        <tr>
          <th>Rocket name </th>
          <th onClick={() => sortRockets('diameter')}>Diameter {sortDown}</th>
          <th onClick={() => sortRockets('height')}>Height {sortDown}</th>
          <th onClick={() => sortRockets('mass')}>Mass {sortDown}</th>
          <th onClick={() => sortRockets('cost_per_launch')}>
            Cost per launch {sortDown}
          </th>
        </tr>
      </thead>
      <tbody>
        {displayRockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>{rocket.rocket_name}</td>
            <td>{rocket.diameter.meters}m</td>
            <td>{rocket.height.meters}m</td>
            <td>{rocket.mass.kg}kg</td>
            <td>
              $
              {rocket.cost_per_launch
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );

  const message = (
    <NoResultsMessage>
      No results were found matching your search criteria.
    </NoResultsMessage>
  );

  return (
    <TableContainer>{displayRockets.length ? table : message}</TableContainer>
  );
};
