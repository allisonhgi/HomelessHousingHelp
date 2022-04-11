import React from "react";
import { Link } from "react-router-dom";
import "./VoucherToolPopUp2.css";

class VoucherToolPopUp2 extends React.Component {
  render() {
    const { thisWillTakeYouB, noStayOnTheVoucherTool, yesTakeMeToTheHomePage } = this.props;

    return (
      <div className="voucher-tool-pop-up border-1px-black-4">
        <div className="this-will-take-you-b roboto-medium-black-38px">{thisWillTakeYouB}</div>
        <div className="overlap-group-container-4">
          <div className="overlap-group-69">
            <div className="no-stay-on-the-voucher-tool roboto-medium-white-30px">{noStayOnTheVoucherTool}</div>
          </div>
          <div className="overlap-group1-49">
            <Link to="/home-page-v3">
              <div className="yes-take-me-to-the-home-page roboto-medium-white-30px">{yesTakeMeToTheHomePage}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolPopUp2;
