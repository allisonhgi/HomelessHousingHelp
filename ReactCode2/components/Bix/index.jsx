import React from "react";
import "./Bix.css";

class Bix extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`bix ${className || ""}`}>
        <img className="vector-77" src="/img/vector-14@2x.svg" />
      </div>
    );
  }
}

export default Bix;
