import App, { Container } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import configureStore from "@/src/redux/configureStore";

interface AppProps {
  pageProps: object;
  initialState: any;
  store: any;
}
interface AppContext {
  Component: any;
  ctx: any;
}

export default class MyApp extends App<AppProps> {
  public static async getInitialProps({ Component, ctx }: AppContext) {
    const store = configureStore();
    ctx.store = store;

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      initialState: store.getState(),
      pageProps,
    };
  }

  private store: any;
  public constructor(props: any) {
    super(props);
    this.store = configureStore(props.initialState);
  }

  public render() {
    const {
      Component,
      pageProps,
      store,
    } = this.props;
    return (
      <Container>
        <Provider store={this.store}>
          <Head><title>nextjs-with-redux</title></Head>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
