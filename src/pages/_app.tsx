import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { initStore } from '../app/store';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={initStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
