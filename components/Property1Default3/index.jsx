import React from "react";
import "./Property1Default3.css";

class Property1Default3 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="received-voucher-button-1">
        <div className="ive-applied-for-a-v-4 roboto-medium-white-40px">{children}</div>
      </div>
    );
  }
}

export default Property1Default3;
