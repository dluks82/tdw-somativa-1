import { Component } from "react";
import "./Input.css";

export class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, placeholder, value, onChange, className = "" } = this.props;
    const inputClass = `input ${className}`.trim();

    return (
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
}
