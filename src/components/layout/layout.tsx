import React, { FunctionComponent } from 'react';
import Header from './header';
import _Layout from './layout.style';
import MainTab from './main-tab';

interface Props {
  useNav?: boolean;
}

const Layout: FunctionComponent<Props> = ({ children, useNav = true }) => (
  <_Layout useNav={useNav}>
    <Header />
    <main>
      {useNav ? <MainTab /> : null}
      {children}
    </main>
  </_Layout>
);

export default Layout;
