import { Component } from "react";
import "./Button.css";

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className = "" } = this.props;
    const buttonClass = `btn ${className}`.trim();

    return (
      <button className={buttonClass} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
