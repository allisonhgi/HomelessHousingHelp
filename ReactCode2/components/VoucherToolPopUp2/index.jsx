import React from "react";
import { Link } from "react-router-dom";
import "./VoucherToolPopUp2.css";

class VoucherToolPopUp2 extends React.Component {
  render() {
    return (
      <div className="voucher-tool-pop-up border-1px-black-4">
        <div className="this-will-take-you-b roboto-medium-black-38px">
          This will take you back to the home page. Are you sure that you would like to exit?
        </div>
        <div className="overlap-group-container-4">
          <div className="overlap-group1-48">
            <div className="no-stay-on-the-voucher-tool roboto-medium-white-30px">No, stay on the voucher tool</div>
          </div>
          <div className="overlap-group-68">
            <Link to="/home-page-v3">
              <div className="yes-take-me-to-the-home-page roboto-medium-white-30px">Yes, take me to the home page</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VoucherToolPopUp2;
