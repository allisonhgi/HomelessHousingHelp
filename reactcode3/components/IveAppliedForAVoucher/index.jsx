import React from "react";
import "./IveAppliedForAVoucher.css";

class IveAppliedForAVoucher extends React.Component {
  render() {
    const { children } = this.props;

    return <div className="ive-applied-for-a-voucher roboto-medium-white-48px">{children}</div>;
  }
}

export default IveAppliedForAVoucher;
