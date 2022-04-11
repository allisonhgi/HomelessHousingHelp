import React from "react";
import "./TipTypeAudioButton.css";

class TipTypeAudioButton extends React.Component {
  render() {
    const { thisButtonWillRea } = this.props;

    return (
      <div className="tip-box-4">
        <div className="overlap-group-66">
          <div className="rectangle-6-5 border-3px-summer-green"></div>
          <div className="this-button-will-rea librebaskerville-normal-black-30px">{thisButtonWillRea}</div>
          <img className="arrow-3-5" src="/img/arrow-3-3@2x.svg" />
          <div className="rectangle-8-2"></div>
        </div>
      </div>
    );
  }
}

export default TipTypeAudioButton;
