import '../styles/global.css';

import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
      TagManager.initialize({ gtmId: 'G-FZNQKNCM4Q' });
    }, []);
    return <Component {...pageProps} />;
  }
  