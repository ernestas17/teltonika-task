import { createGlobalStyle } from 'styled-components';

const GlogalStyles = createGlobalStyle`
  // Resets
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Barlow', sans-serif;
  }
`;

export default GlogalStyles;

// -- media queries
export const device = {
  mobile: `(min-width: 320px)`,
  tablet: `(min-width:768px)`,
  laptop: `(min-width: 1097px)`,
  desktop: `(min-width: 1440px)`,
};
