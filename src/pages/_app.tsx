import { AppContext, AppProps } from 'next/app';
import { ReactElement } from 'react';
import { initStore } from '../app/store';
import { Provider } from 'react-redux';
import absoluteUrl from 'next-absolute-url';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={initStore(pageProps)}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const { origin } = absoluteUrl(ctx.req);
  const res = await fetch(`${origin}/api/main`);
  const json = await res.json();
  const mainBanner = json?.data?.mainBanner;

  return { pageProps: { main: { mainBanner } } };
};

export default App;
