import "isomorphic-unfetch";
import "@/assets/styles/main.scss";

import React from 'react'
import App, { Container } from 'next/app'

import NProgress from "next-nprogress/component";
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: { Component: any, ctx: object; }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head><title>nextjs template</title></Head>
        <Component {...pageProps} />
        <NProgress />
      </Container>
    )
  }
}
