import '../styles/global.css';

import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-KX573GR' });
    }, []);
    return <Component {...pageProps} />;
  }
  