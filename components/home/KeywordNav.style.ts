import styled from 'styled-components';
import { headerHeight } from '../../styles/util';
import _Dropdown from '../Dropdown.style';

const _KeywordNav = styled.div`
  top: ${headerHeight}px;
  height: 35px;
  padding-top: 15px;
  padding-bottom: 20px;
  overflow: hidden;

  ul {
    padding-left: 16px;
    padding: 0 14px 40px 15px;
    overflow-x: auto;
    margin-bottom: -40px;
    font-size: 0;
    white-space: nowrap;

    li {
      padding: 0 2px 0 0;
      display: inline-block;
      vertical-align: top;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  ${_Dropdown} {
    border: 1px solid #4684e9;
    color: #fff;
    font-weight: 700;
    background-color: #4684e9;
    height: 33px;
    border-radius: 9px;

    select {
      height: 35px;
      padding: 0 1.5rem 0 10px;
      color: #fff;
      font-weight: 700;
      font-size: 1.1rem;
      background-color: #4684e9;
      border-radius: 9px;
    }

    svg {
      width: 1rem;
      height: 1rem;
      top: 0.8rem;
      right: 0.3rem;
    }
  }
`;

export default _KeywordNav;
