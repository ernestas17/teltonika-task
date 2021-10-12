import styled from 'styled-components';
import { device } from '../../global.style';

export const TableContainer = styled.div`
  margin-top: 45px;
`;

export const StyledTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 5px;

  thead tr th {
    padding: 0px 20px 10px 15px;
    color: #676c7e;
    font-size: 14px;
    font-weight: 500;
    text-align: right;
  }

  thead tr th:hover {
    cursor: pointer;
  }

  thead tr th:first-child:hover {
    cursor: initial;
  }

  thead tr th:first-child {
    text-align: left;
  }

  thead tr th svg {
    display: none;
  }

  @media ${device.tablet} {
    thead tr th svg {
      padding-left: 1px;
      display: inline-block;
    }
  }

  tbody tr {
    height: 49px;
    padding: 0 15px;

    background: #fff;
  }

  tbody tr td {
    padding: 15px;

    color: #676c7e;
    font-weight: 400;
    font-size: 14px;
    text-align: right;
  }

  tbody tr td:first-child {
    border-radius: 8px 0 0 8px;
    text-align: left;
  }

  tbody tr td:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const NoResultsMessage = styled.p`
  color: #676c7e;
  padding: 15px;
  font-size: 14px;
  font-weight: 400;
`;
