import React from "react";
import { Link } from "react-router-dom";
import "./Property1Welcome.css";

class Property1Welcome extends React.Component {
  render() {
    const { obot, clickNextToCont, tutorial1, skip } = this.props;

    return (
      <div className="tool-question-screen-1 border-1px-summer-green">
        <div className="overlap-group1-45">
          <div className="overlap-group-68 librebaskerville-normal-black-38px">
            <div className="obot">{obot}</div>
            <div className="click-next-to-cont">{clickNextToCont}</div>
            <img className="tutorial-1" src={tutorial1} />
          </div>
          <Link to="/voucher-tool-v2-disclaimers">
            <div className="skip roboto-medium-black-30px">{skip}</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Property1Welcome;
