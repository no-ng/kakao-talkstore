import { AppContext, AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { initStore } from '../app/store';
import { origin } from '../config';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={initStore(pageProps)}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const res = await fetch(`${origin}/api/main`);
  const json = await res.json();
  const mainBanner = json?.data?.mainBanner;

  return { pageProps: { main: { mainBanner } } };
};

export default App;
