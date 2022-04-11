import React from "react";
import "./EvaarrowLeftFill.css";

class EvaarrowLeftFill extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`evaarrow-left-fill-21 ${className || ""}`}>
        <img className="vector-123" src="/img/vector-7@2x.svg" />
      </div>
    );
  }
}

export default EvaarrowLeftFill;
