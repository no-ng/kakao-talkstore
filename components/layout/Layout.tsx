import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import { MainTab } from './MainTab';
import { _Layout } from './Layout.style';

interface Props {
  useNav?: boolean;
}

export const Layout: FunctionComponent<Props> = ({ children, useNav = true }) => (
  <_Layout useNav={useNav}>
    <Header />
    <main>
      {useNav ? <MainTab /> : null}
      {children}
    </main>
  </_Layout>
);
