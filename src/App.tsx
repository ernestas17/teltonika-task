// Styles
import GlogalStyles from './global.style';
import { StyledApp } from './App.style';

// Components
import { Filter } from './components/filter/Filter';

const App: React.FC = () => {
  return (
    <>
      <GlogalStyles />
      <StyledApp>
        <Filter />
      </StyledApp>
    </>
  );
};

export default App;
