import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Pangolin&family=VT323&family=Sono&display=swap"
            rel="stylesheet"
          />
          {/* Favicon */}
          <link rel="icon" type="image/png" href="/img/poppy3.png" />
          <link rel="shortcut icon" type="image/png" href="/img/poppy3.png" />
          <link rel="apple-touch-icon" href="/img/poppy3.png" />
          {/* Global styles are imported in _app.tsx, so this is not needed */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
