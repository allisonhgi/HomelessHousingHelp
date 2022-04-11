import React from "react";
import "./TipTypeNextButton.css";

class TipTypeNextButton extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`tip-box ${className || ""}`}>
        <div className="overlap-group-58">
          <div className="rectangle-6 border-3px-summer-green"></div>
          <div className="this-button-will-tak librebaskerville-normal-black-30px">
            This button will take you to the next section
            <br />
            <br />
            Click it now to start.
          </div>
          <img className="arrow-3" src="/img/arrow-3@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TipTypeNextButton;
