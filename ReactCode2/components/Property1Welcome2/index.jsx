import React from "react";
import { Link } from "react-router-dom";
import "./Property1Welcome2.css";

class Property1Welcome2 extends React.Component {
  render() {
    return (
      <div className="tool-question-screen-3 border-1px-summer-green">
        <div className="overlap-group4-14">
          <div className="overlap-group3-21 librebaskerville-normal-black-36px">
            <div className="welcome-this-tool-i">
              Welcome! <br />
              <br />
              This tool is meant to help connect people like you with an emergency housing voucher. Before we begin,
              we’ll show you a few helpful features!
            </div>
            <div className="click-next-to-cont-1">Click “Next” to continue or “Skip” to skip the tutorial.</div>
            <img className="tutorial-1-1" src="/img/tutorial-1@2x.png" />
          </div>
          <Link to="/voucher-tool-v2-disclaimers">
            <div className="skip-1 roboto-medium-black-30px">Skip</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Property1Welcome2;
