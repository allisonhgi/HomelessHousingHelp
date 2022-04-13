import React from "react";
import "./TipTypeNextButton.css";

class TipTypeNextButton extends React.Component {
  render() {
    const { thisButtonWillTak } = this.props;

    return (
      <div className="tip-box-2">
        <div className="overlap-group-23">
          <div className="rectangle-6-2 border-3px-summer-green"></div>
          <div className="this-button-will-tak-1 librebaskerville-normal-black-30px">{thisButtonWillTak}</div>
          <img className="arrow-3-2" src="/img/arrow-3-1@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TipTypeNextButton;
