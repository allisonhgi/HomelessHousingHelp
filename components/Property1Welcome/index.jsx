import React from "react";
import { Link } from "react-router-dom";
import "./Property1Welcome.css";

class Property1Welcome extends React.Component {
  render() {
    const { welcomeThisToolI, clickNextToCont, tutorial1, skip } = this.props;

    return (
      <div className="tool-question-screen border-1px-summer-green">
        <div className="overlap-group3-1">
          <div className="overlap-group2-2 librebaskerville-normal-black-36px">
            <div className="welcome-this-tool-i">{welcomeThisToolI}</div>
            <div className="click-next-to-cont">{clickNextToCont}</div>
            <img className="tutorial-1" src={tutorial1} />
          </div>
          <Link to="/voucher-tool-v3-disclaimers">
            <div className="skip">{skip}</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Property1Welcome;
