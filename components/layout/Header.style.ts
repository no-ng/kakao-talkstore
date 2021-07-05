import styled from 'styled-components';
import { headerHeight, screenOut, screenSmallRight } from '../../styles/util';

export const _Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11000;
  width: 100%;
  min-height: ${headerHeight}px;
  text-align: center;
  background-color: #fff;

  h1 {
    ${screenOut}
  }

  .logo_txt {
    display: block;
    overflow: hidden;
    position: relative;
    height: ${headerHeight}px;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
    font-weight: 700;
    color: #000;
    vertical-align: top;
  }

  .logo_img {
    display: block;
    width: 112px;
    height: auto;
    margin: 0 auto;
    padding-top: 6px;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 5px;
  }

  .menu_link {
    position: relative;
    float: left;
    width: ${headerHeight}px;
    height: ${headerHeight}px;
    text-align: center;
  }

  .search {
    position: absolute;
    top: 0;
    right: 5px;
  }

  .search_link {
    float: left;
    width: ${headerHeight}px;
    height: ${headerHeight}px;
    text-align: center;
  }

  ${screenSmallRight}
`;
