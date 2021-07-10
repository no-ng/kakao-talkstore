import React, { ReactElement } from 'react';
import Layout from '../components/layout/layout';
import BrandWrapper from '../features/brand/brandWrapper';

export default function Brand(): ReactElement {
  return (
    <Layout>
      <BrandWrapper />
    </Layout>
  );
}
