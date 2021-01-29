import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:image" content="/img/starWars.png" />
          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
          <meta property="og:type" content="website" />
          <meta name="keywords" content="Star Wars, Starr " />
          <meta property="og:site_name" content="Starwars-test.com" />
          <meta
            property="og:description"
            content="
            Star Wars is an American epic space opera media franchise created by George Lucas, 
            which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. 
            The franchise has been expanded into various films and other media, including television series, 
            video games, novels, comic books, theme park attractions, and themed areas, comprising an 
            all-encompassing fictional universe. In 2020, its total value was estimated at US$70 billion, 
            and it is currently the fifth-highest-grossing media franchise of all time."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
