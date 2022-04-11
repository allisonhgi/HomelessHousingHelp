import React from "react";
import "./TipTypeSaveData.css";

class TipTypeSaveData extends React.Component {
  render() {
    const { thisButtonWillSav } = this.props;

    return (
      <div className="tip-box-9">
        <div className="overlap-group3-30">
          <div className="rectangle-6-10 border-3px-summer-green"></div>
          <div className="this-button-will-sav-1 librebaskerville-normal-black-30px">{thisButtonWillSav}</div>
          <img className="arrow-3-10" src="/img/arrow-3-1@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TipTypeSaveData;
