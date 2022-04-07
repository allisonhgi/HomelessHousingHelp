import React from "react";
import { Link } from "react-router-dom";
import "./VoucherButtonV2.css";

class VoucherButtonV2 extends React.Component {
  render() {
    const { iHaveAVoucher, className } = this.props;

    return (
      <Link to="/resources-v3">
        <div className={`voucher-button-v2-1 ${className || ""}`}>
          <div className="overlap-group-62">
            <div className="i-have-a-voucher-1 roboto-medium-white-48px">{iHaveAVoucher}</div>
            <img className="arrow-1-5" src="/img/arrow-1@2x.svg" />
          </div>
        </div>
      </Link>
    );
  }
}

export default VoucherButtonV2;
