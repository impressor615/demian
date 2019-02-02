import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head>
          <meta name="description" content="nextjs-template" />
          <meta name="keywords" content="nextjs,template" />
          <meta name="author" content="demian" />
          <meta
            name="viewport"
            content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, height=device-height"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
