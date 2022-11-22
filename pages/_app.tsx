import { FC, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../store';

import '../styles/globals.css';
import 'normalize.css';


const App: FC<AppProps> = ({Component, ...rest}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      {isMounted && <Component {...props.pageProps} />}
    </Provider>
  );
};

export default App;
