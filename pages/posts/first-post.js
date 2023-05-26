import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
    return (
      <>
        <Head>
          <title>First Post</title>
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

        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }