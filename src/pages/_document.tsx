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
          {/* Favicon - white tinted version of poppy image */}
          <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cfilter id='invert'%3E%3CfeColorMatrix values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Cimage href='/img/poppy3.png' width='100' height='100' filter='url(%23invert)'/%3E%3C/svg%3E" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/poppy3.png" />
          <link rel="shortcut icon" href="/img/poppy3.png" />
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
