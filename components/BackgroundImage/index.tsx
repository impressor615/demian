import "./style.scss";

import { PureComponent } from "react";

interface PageProps {
  src: string;
  pcSrc?: string;
  children?: React.ReactNode;
}

class BackgroundImage extends PureComponent<PageProps, {}> {
  public render() {
    const { src, pcSrc, children } = this.props;
    return (
      <section className="__background-image">
        <img src={src} className="d-md-none" />
        <img src={pcSrc} className="d-none d-md-block"/>
        { children }
      </section>
    );
  }
}

export default BackgroundImage;
