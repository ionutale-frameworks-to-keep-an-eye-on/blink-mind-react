import * as React from "react";
import "./Popup.scss";
export class Popup extends React.Component {
  render() {
    return <div className="">{this.props.children}</div>;
  }
}
