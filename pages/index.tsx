import { ReactElement } from 'react';
import KeywordNav from '../components/home/KeywordNav';
import Layout from '../components/layout/Layout';

export default function Home(): ReactElement {
  return (
    <Layout>
      <KeywordNav />
    </Layout>
  );
}
