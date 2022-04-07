import React from "react";
import "./Property1Default.css";

class Property1Default extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`havent-applied-button ${className || ""}`}>
        <div className="i-havent-applied-fo roboto-medium-white-40px">
          I haven’t applied for a voucher but would like to.
        </div>
      </div>
    );
  }
}

export default Property1Default;
