import React, { ReactElement } from 'react';
import Layout from '../components/layout/layout';
import _Brand from '../features/brand/brand';

export default function Brand(): ReactElement {
  return (
    <Layout>
      <_Brand />
    </Layout>
  );
}
