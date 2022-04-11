import React from "react";
import "./Property1Default4.css";

class Property1Default4 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="received-voucher-button-1">
        <div className="ive-applied-for-a-v-5 roboto-medium-white-40px">{children}</div>
      </div>
    );
  }
}

export default Property1Default4;
