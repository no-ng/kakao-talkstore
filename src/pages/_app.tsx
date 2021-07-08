import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { store } from '../app/store';
import { Provider } from 'react-redux';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
