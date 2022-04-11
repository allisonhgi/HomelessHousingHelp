import React from "react";
import { Link } from "react-router-dom";
import "./VoucherButton.css";

class VoucherButton extends React.Component {
  render() {
    const { iHaveAVoucher, className } = this.props;

    return (
      <Link to="/voucher-tool-starting-screen">
        <div className={`voucher-button ${className || ""}`}>
          <div className="i-have-a-voucher">{iHaveAVoucher}</div>
          <Link to="/voucher-tool-starting-screen">
            <img className="arrow-1-1" src="/img/arrow-1@2x.svg" />
          </Link>
        </div>
      </Link>
    );
  }
}

export default VoucherButton;
