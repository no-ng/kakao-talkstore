import React from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../components/layout/layout';
import { origin } from '../config';
import { fetchMainDone } from '../features/main/main.slice';
import Talkdeal from '../features/talkdeal/talkdeal';

export default function Home({ main }: any) {
  const dispatch = useDispatch();

  dispatch(fetchMainDone(main));

  return (
    <Layout>
      <Talkdeal></Talkdeal>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${origin}/api/main`);
  const json = await res.json();
  const mainBanner = json?.data?.mainBanner;

  return { props: { main: { mainBanner } } };
}
