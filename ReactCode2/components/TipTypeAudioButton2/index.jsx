import React from "react";
import "./TipTypeAudioButton2.css";

class TipTypeAudioButton2 extends React.Component {
  render() {
    const { thisButtonWillRea } = this.props;

    return (
      <div className="tip-box-7">
        <div className="overlap-group-87">
          <div className="rectangle-6-8 border-3px-summer-green"></div>
          <div className="this-button-will-rea-1 librebaskerville-normal-black-30px">{thisButtonWillRea}</div>
          <img className="arrow-3-8" src="/img/arrow-3-6@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TipTypeAudioButton2;
