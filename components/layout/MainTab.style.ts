import styled from 'styled-components';
import { headerHeight, screenSmall } from '../../styles/util';

const _MainTab = styled.div`
  position: absolute;
  top: ${headerHeight}px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #fff;
  width: 100%;

  ul {
    top: 0px;
    display: table;
    table-layout: fixed;
    text-align: center;
    width: 100%;
    min-width: 320px;
    max-width: 750px;
    margin: auto;

    li {
      display: table-cell;
      white-space: nowrap;
    }

    a {
      height: ${headerHeight}px;
      line-height: ${headerHeight}px;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: -0.5px;
      text-align: center;

      span {
        display: inline-block;
        position: relative;
        vertical-align: top;
        white-space: nowrap;
        line-height: ${headerHeight}px;
        color: #000;
      }

      &[aria-selected='true'] {
        font-weight: 700;

        span:after {
          left: -4px;
          right: -4px;
          position: absolute;
          bottom: -1px;
          height: 2px;
          background-color: #4a4a4a;
          content: '';
        }
      }
    }
  }

  ${screenSmall}
`;

export default _MainTab;
