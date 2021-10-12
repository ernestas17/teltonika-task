import styled from 'styled-components';
import { device } from '../../global.style';

export const SearchContainer = styled.div`
  max-width: 1097px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 8px;
  padding: 15px;
  background: #fff;

  @media ${device.tablet} {
    flex-wrap: nowrap;
    gap: 30px;
  }
`;

export const Logo = styled.h1`
  width: calc(50% - 15px);

  color: #283049;
  font-size: 24px;
  font-weight: 500;

  @media ${device.tablet} {
    width: initial;
  }
`;

export const Results = styled.div`
  width: calc(50% - 15px);

  color: #676c7e;
  font-size: 14px;
  font-weight: 300;
  text-align: right;

  @media ${device.tablet} {
    width: initial;
  }
`;

export const InputContainer = styled.div`
  height: 35px;
  margin-top: 15px;
  border-radius: 50px;
  padding: 10px;

  flex-grow: 1;
  display: flex;

  background: #f5f5fa;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-left: 10px;
  border: none;

  background: #f5f5fa;
  outline: none;

  color: #9b9eac;
  font-size: 16px;

  &::placeholder {
    color: #9b9eac;
  }
`;
