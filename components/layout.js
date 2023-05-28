import Head from 'next/head';
import Script from 'next/script';
import styles from './layout.module.css';

export default function Layout({ title, children }) {
  return(
    <div className={styles.container}>
        <Head>
          <title>{title}</title>
        </Head>
        
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-FZNQKNCM4Q"
            strategy="afterInteractive"
        />
        <div className="container">
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FZNQKNCM4Q');
        `}
        </Script>
        </div> 

        {children}
    </div>  
  );    
}
