import React from "react";
import "./TipTypeBackButton.css";

class TipTypeBackButton extends React.Component {
  render() {
    const { thisButtonWillTak } = this.props;

    return (
      <div className="tip-box">
        <div className="overlap-group-21">
          <div className="rectangle-6 border-3px-summer-green"></div>
          <div className="this-button-will-tak librebaskerville-normal-black-30px">{thisButtonWillTak}</div>
          <img className="arrow-3" src="/img/arrow-3@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TipTypeBackButton;
