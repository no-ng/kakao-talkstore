import React, { ReactElement } from 'react';
import Layout from '../components/layout/layout';
import Talkdeal from '../features/talkdeal/talkdeal';

export default function Home(): ReactElement {
  return (
    <Layout>
      <Talkdeal></Talkdeal>
    </Layout>
  );
}
