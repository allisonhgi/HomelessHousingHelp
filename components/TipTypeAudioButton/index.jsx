import React from "react";
import "./TipTypeAudioButton.css";

class TipTypeAudioButton extends React.Component {
  render() {
    const { thisButtonWillRea } = this.props;

    return (
      <div className="tip-box-1">
        <div className="overlap-group-22">
          <div className="rectangle-6-1 border-3px-summer-green"></div>
          <div className="this-button-will-rea librebaskerville-normal-black-30px">{thisButtonWillRea}</div>
          <img className="arrow-3-1" src="/img/arrow-3@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TipTypeAudioButton;
