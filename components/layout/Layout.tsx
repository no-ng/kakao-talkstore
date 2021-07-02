import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import { Nav } from './Nav';
import { _Main } from './Layout.style';

interface Props {
  useNav?: boolean;
}

export const Layout: FunctionComponent<Props> = ({ children, useNav = true }) => (
  <div className="app">
    <Header />
    <Nav disabled={!useNav} />
    <_Main useNav={useNav}>{children}</_Main>
  </div>
);
