import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMain } from '../../features/main/main.slice';
import Header from './header';
import _Layout from './layout.style';
import MainTab from './main-tab';

interface Props {
  useNav?: boolean;
}

const Layout: FunctionComponent<Props> = ({ children, useNav = true }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMain());
  }, []);
  return (
    <_Layout useNav={useNav}>
      <Header />
      <main>
        {useNav ? <MainTab /> : null}
        {children}
      </main>
    </_Layout>
  );
};

export default Layout;
