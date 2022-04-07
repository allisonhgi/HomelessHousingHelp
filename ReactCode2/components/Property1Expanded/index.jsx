import React from "react";
import { Link } from "react-router-dom";
import Bix from "../Bix";
import "./Property1Expanded.css";

class Property1Expanded extends React.Component {
  render() {
    const { iveAppliedForAV, close, goToHousingTool, spanText1, spanText2, spanText3, spanText4 } = this.props;

    return (
      <div className="received-voucher-button">
        <div className="overlap-group2-13">
          <div className="ive-applied-for-a-v-2 roboto-medium-white-40px">{iveAppliedForAV}</div>
          <img className="line-7" src="/img/line-7@2x.svg" />
          <div className="overlap-group-container-1">
            <div className="overlap-group1-41">
              <Bix />
              <div className="close roboto-medium-white-21px-2">{close}</div>
            </div>
            <div className="overlap-group-21">
              <Link to="/housing-tool">
                <div className="tutorial-buttons"></div>
              </Link>
              <Link to="/housing-tool">
                <div className="go-to-housing-tool roboto-medium-white-25px">{goToHousingTool}</div>
              </Link>
              <img className="arrow-1" src="/img/arrow-1-5@2x.svg" />
              <div className="if-you-have-applied librebaskerville-normal-white-25px-2">
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

export default Property1Expanded;
