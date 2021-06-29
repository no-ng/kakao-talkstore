import React, { FunctionComponent } from 'react';
import { Header } from './header';

export const Layout: FunctionComponent = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
);
