import React from "react";
import { connect } from "react-redux";

import {
  CHANGE_COMPILER,
  CHANGE_FRAMEWORK,
} from "@/constants";

export interface HelloProps extends ConnectProps {
  compiler: string;
  framework: string;
}

class Hello extends React.PureComponent<HelloProps, {}> {
  public render() {
    const { compiler, framework } = this.props;
    return (
      <>
        <h1>Hello from {compiler} and {framework}!</h1>
        <button onClick={this.onChangeCompiler} type="button">change compiler</button>
        <button onClick={this.onChangeFramework} type="button">change framework</button>
      </>
    );
  }

  private onChangeCompiler = () => {
    const { dispatch } = this.props;
    dispatch({ type: CHANGE_COMPILER, payload: "Javascript" });
  }

  private onChangeFramework = () => {
    const { dispatch } = this.props;
    dispatch({ type: CHANGE_FRAMEWORK, payload: "CoffeeScript" });
  }
}

const mapStateToProps = ({ hello }: { hello: HelloState }) => ({
  ...hello,
});

export default connect(mapStateToProps)(Hello);
