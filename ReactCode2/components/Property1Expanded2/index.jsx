import React from "react";
import { Link } from "react-router-dom";
import Bix from "../Bix";
import "./Property1Expanded2.css";

class Property1Expanded2 extends React.Component {
  render() {
    const { iveAppliedForAV, close, goToHousingTool, spanText1, spanText2, spanText3, spanText4 } = this.props;

    return (
      <div className="received-voucher-button-3">
        <div className="overlap-group1-60">
          <div className="ive-applied-for-a-v-9 roboto-medium-white-40px">{iveAppliedForAV}</div>
          <img className="line-7-1" src="/img/line-7@2x.svg" />
          <div className="overlap-group-container-11">
            <div className="overlap-group2-45">
              <Bix />
              <div className="close-1 roboto-medium-white-21px-2">{close}</div>
            </div>
            <div className="overlap-group-90">
              <Link to="/resources-v3">
                <div className="tutorial-buttons-131"></div>
              </Link>
              <Link to="/resources-v3">
                <div className="go-to-housing-tool-1 roboto-medium-white-25px">{goToHousingTool}</div>
              </Link>
              <img className="arrow-1-8" src="/img/arrow-1-5@2x.svg" />
              <div className="if-you-have-applied-1 librebaskerville-normal-white-25px-2">
                <span className="librebaskerville-normal-white-25px">{spanText1}</span>
                <span className="librebaskerville-normal-cornflower-25px">{spanText2}</span>
                <span className="librebaskerville-normal-white-25px">{spanText3}</span>
                <span className="librebaskerville-bold-cornflower-25px">{spanText4}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property1Expanded2;
