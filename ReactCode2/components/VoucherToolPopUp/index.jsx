import React from "react";
import VoucherToolPopUp2 from "../VoucherToolPopUp2";
import "./VoucherToolPopUp.css";

class VoucherToolPopUp extends React.Component {
  render() {
    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-pop-up-1 screen">
          <VoucherToolPopUp2 />
        </div>
      </div>
    );
  }
}

export default VoucherToolPopUp;
