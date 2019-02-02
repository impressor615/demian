import "@/assets/styles/main.scss";
import "isomorphic-unfetch";

import App, { Container } from "next/app";
import React from "react";

import NProgress from "next-nprogress/component";
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
        <NProgress />
      </Container>
    );
  }
}
