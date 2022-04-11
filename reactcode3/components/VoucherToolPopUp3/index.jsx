import React from "react";
import VoucherToolPopUp4 from "../VoucherToolPopUp4";
import "./VoucherToolPopUp3.css";

class VoucherToolPopUp3 extends React.Component {
  render() {
    const { voucherToolPopUp4Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-pop-up-2 screen">
          <VoucherToolPopUp4
            thisWillTakeYouB={voucherToolPopUp4Props.thisWillTakeYouB}
            noStayOnTheVoucherTool={voucherToolPopUp4Props.noStayOnTheVoucherTool}
            yesTakeMeToTheHomePage={voucherToolPopUp4Props.yesTakeMeToTheHomePage}
          />
        </div>
      </div>
    );
  }
}

export default VoucherToolPopUp3;
