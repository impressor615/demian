interface StoreState {
  hello: HelloState;
}

interface HelloState {
  compiler: string;
  framework: string;
}

interface BaseAction {
  type: string;
  payload?: string | object;
}
