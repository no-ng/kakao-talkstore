import React, { FunctionComponent, useEffect } from 'react';
import Header from './Header';
import MainTab from './MainTab';
import _Layout from './Layout.style';
import { useDispatch } from 'react-redux';
import { fetchMain } from '../../features/main/mainSlice';

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
