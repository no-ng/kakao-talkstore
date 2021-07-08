import styled from 'styled-components';

export const headerHeight = 44;
export const screenOut = `
  position: absolute;
  width: 0;
  height: 0;
  font-size: 10px;
  overflow: hidden;
  line-height: 0;
  text-indent: -9999px;
`;

export const screenSmall = `
  @media only screen and (min-width: 1025px) {
    margin: 0 auto;
    max-width: 750px;
  }
`;

export const screenSmallRight = `
  @media only screen and (min-width: 1025px) {
    right: 0;
    margin: 0 auto;
    max-width: 750px;
  }
`;
