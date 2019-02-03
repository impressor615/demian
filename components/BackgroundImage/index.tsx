import "./style.scss";

import { PureComponent } from "react";

interface PageProps {
  src: string;
  pcSrc?: string;
  children?: React.ReactNode;
  className?: string;
}

class BackgroundImage extends PureComponent<PageProps, {}> {
  public render() {
    const { src, pcSrc, children, ...rest } = this.props;
    return (
      <section className={`__background-image ${rest.className}`}>
        <img src={src} className="d-md-none" />
        <img src={pcSrc} className="d-none d-md-block"/>
        { children }
      </section>
    );
  }
}

export default BackgroundImage;
