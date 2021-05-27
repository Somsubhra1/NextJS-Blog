import Document, { Html, Head, Main, NextScript } from "next/document";

// Document is used to edit the surrounding html structure of next app

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
