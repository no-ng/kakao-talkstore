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

let cache: any;

export async function getServerSideProps() {
  if (!cache) {
    const res = await fetch(`${origin}/api/main`);
    const json = await res.json();
    const mainBanner = json?.data?.mainBanner;

    cache = { main: { mainBanner } };
  }

  return { props: cache };
}
