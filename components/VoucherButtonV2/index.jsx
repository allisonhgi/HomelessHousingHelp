import React from "react";
import "./VoucherButtonV2.css";

class VoucherButtonV2 extends React.Component {
  render() {
    const { iHaveAVoucher, className } = this.props;

    return (
      <div className={`voucher-button-v2-1 ${className || ""}`}>
        <div className="i-have-a-voucher roboto-medium-white-40px">{iHaveAVoucher}</div>
        <img className="arrow-1-3" src="/img/arrow-1-2@2x.svg" />
      </div>
    );
  }
}

export default VoucherButtonV2;
