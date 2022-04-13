import React from "react";
import VoucherToolPopUp2 from "../VoucherToolPopUp2";
import "./VoucherToolPopUp.css";

class VoucherToolPopUp extends React.Component {
  render() {
    const { voucherToolPopUp2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-pop-up screen">
          <VoucherToolPopUp2
            thisWillTakeYouB={voucherToolPopUp2Props.thisWillTakeYouB}
            noStayOnTheVoucherTool={voucherToolPopUp2Props.noStayOnTheVoucherTool}
            yesTakeMeToTheHomePage={voucherToolPopUp2Props.yesTakeMeToTheHomePage}
          />
        </div>
      </div>
    );
  }
}

export default VoucherToolPopUp;
