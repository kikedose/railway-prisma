import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
