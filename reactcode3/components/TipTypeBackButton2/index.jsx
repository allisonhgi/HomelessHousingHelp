import React from "react";
import "./TipTypeBackButton2.css";

class TipTypeBackButton2 extends React.Component {
  render() {
    const { thisButtonWillTak } = this.props;

    return (
      <div className="tip-box-5">
        <div className="overlap-group-85">
          <div className="rectangle-6-6 border-3px-summer-green"></div>
          <div className="this-button-will-tak-4 librebaskerville-normal-black-30px">{thisButtonWillTak}</div>
          <img className="arrow-3-6" src="/img/arrow-3-1@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TipTypeBackButton2;
