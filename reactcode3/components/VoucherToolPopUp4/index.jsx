import React from "react";
import { Link } from "react-router-dom";
import "./VoucherToolPopUp4.css";

class VoucherToolPopUp4 extends React.Component {
  render() {
    const { thisWillTakeYouB, noStayOnTheVoucherTool, yesTakeMeToTheHomePage } = this.props;

    return (
      <div className="voucher-tool-pop-up-3 border-1px-black-4">
        <div className="this-will-take-you-b-1 roboto-medium-black-38px">{thisWillTakeYouB}</div>
        <div className="overlap-group-container-7">
          <div className="overlap-group1-54">
            <div className="no-stay-on-the-voucher-tool-1 roboto-medium-white-30px">{noStayOnTheVoucherTool}</div>
          </div>
          <div className="overlap-group-76">
            <Link to="/home-page-new-nav-bar-user-logged-in">
              <div className="yes-take-me-to-the-home-page-1 roboto-medium-white-30px">{yesTakeMeToTheHomePage}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolPopUp4;
