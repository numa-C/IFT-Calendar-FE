import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme'


interface MyDocumentInterface {
  url: string
  title: string
  description: string
};

class MyDocument extends Document implements MyDocumentInterface {
  url = '<https://example.com>';
  title = 'Demo Next.js';
  description = 'Demo of Next.js';

  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* Change the contents of `<Head>` as needed. */}
          <meta name="description" content={this.description} />
          <meta name="theme-color" content="#333" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:image" content={`${this.url}/ogp.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="format-detection" content="telephone=no" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;
