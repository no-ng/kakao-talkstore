import styled from 'styled-components';
import { headerHeight } from '../../styles/util';

const _MainTab = styled.div`
  width: 100%;
  height: ${headerHeight}px;

  ul {
    height: ${headerHeight}px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    text-align: center;

    li {
      white-space: nowrap;

      a {
        line-height: ${headerHeight}px;
        height: ${headerHeight}px;
        line-height: ${headerHeight}px;
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
          font-weight: 500;

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
  }
`;

export default _MainTab;
