import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="author" content="Ivo Pereira" />
          <meta
            name="description"
            content="Meu nome é Ivo Pereira, Sou desenvolver front end crio interfaces interativas, responsivas e animadas com muito carinho e 🧡"
          />
          <meta
            name="keywords"
            content="desenvolvimento, desenvolvedor, front end, front-end, ivo pereira, portfólio"
          />

          <meta name="copyright" content="ivopereira 2022" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
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
