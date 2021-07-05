import styled from 'styled-components';
import { headerHeight, screenSmall } from '../../styles/util';

export const _Layout = styled.div<{ useNav: boolean }>`
  margin: 0 auto;
  height: 100%;
  width: 100%;

  main {
    padding-top: ${(props) => (props.useNav ? headerHeight : 0)}px;
  }

  ${screenSmall}
`;
