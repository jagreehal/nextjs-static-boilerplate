import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import React from "react";
import Nav from "../components/Nav";

export class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="antialiased">
          <Nav />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
