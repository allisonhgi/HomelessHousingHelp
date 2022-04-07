import React from "react";
import "./TipTypeBackButton.css";

class TipTypeBackButton extends React.Component {
  render() {
    const { thisButtonWillTak } = this.props;

    return (
      <div className="tip-box-3">
        <div className="overlap-group-61">
          <div className="rectangle-6-3 border-3px-summer-green"></div>
          <div className="this-button-will-tak-3 librebaskerville-normal-black-30px">{thisButtonWillTak}</div>
          <img className="arrow-3-3" src="/img/arrow-3-1@2x.svg" />
        </div>
        <div className="rectangle-8"></div>
      </div>
    );
  }
}

export default TipTypeBackButton;
