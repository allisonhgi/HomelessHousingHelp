import React from "react";
import { Link } from "react-router-dom";
import VoucherButtonV2 from "../VoucherButtonV2";
import "./VoucherButtonV3.css";

class VoucherButtonV3 extends React.Component {
  render() {
    const { className, voucherButtonV2Props } = this.props;

    return (
      <Link to="/voucher-tool-v3-starting-screen">
        <div className={`voucher-button-v3-1 ${className || ""}`}>
          <VoucherButtonV2
            iHaveAVoucher={voucherButtonV2Props.iHaveAVoucher}
            className={voucherButtonV2Props.className}
          />
        </div>
      </Link>
    );
  }
}

export default VoucherButtonV3;
