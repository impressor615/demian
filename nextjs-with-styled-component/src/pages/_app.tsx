import App, { Container } from "next/app";

import Head from "next/head";

export default class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: { Component: any, ctx: object; }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head><title>nextjs template</title></Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
