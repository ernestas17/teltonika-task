import styled from 'styled-components';
import { device } from '../../global.style';

export const FilterWrapper = styled.section`
  width: 100%;
`;

export const FilterContainer = styled.div`
  max-width: 1097px;

  margin: 0 auto;
  padding: 25px 10px 0 10px;

  @media ${device.laptop} {
    padding: 25px 0 0 0;
  }
`;
