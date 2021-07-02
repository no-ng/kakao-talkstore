import styled from 'styled-components';
import { headerHeight } from '../../styles/util';

export const _Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11000;
  width: 100%;
  min-height: 44px;
  text-align: center;
  background-color: #fff;

  .logo_txt {
    display: block;
    overflow: hidden;
    position: relative;
    height: 44px;
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
    width: 44px;
    height: 44px;
    text-align: center;
  }

  .search {
    position: absolute;
    top: 0;
    right: 5px;
  }

  .search_link {
    float: left;
    width: 44px;
    height: 44px;
    text-align: center;
  }
`;

export const _Nav = styled.nav`
  position: fixed;
  top: ${headerHeight}px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #fff;
  width: 100%;

  ul {
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

    .link_tab {
      height: ${headerHeight}px;
      line-height: ${headerHeight}px;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: -0.5px;
      text-align: center;
    }
  }
`;

export const _Main = styled.main<{ useNav: boolean }>`
  padding-top: ${({ useNav }) => headerHeight + (useNav ? headerHeight : 0)}px;
`;
