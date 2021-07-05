import styled from 'styled-components';
import { headerHeight } from '../../styles/util';

const _KeywordNav = styled.div`
  top: ${headerHeight}px;
  height: 35px;
  padding-top: 15px;
  padding-bottom: 20px;
  padding: 10px 0 8px;
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
`;

export default _KeywordNav;
