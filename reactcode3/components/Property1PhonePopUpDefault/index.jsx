import React from "react";
import "./Property1PhonePopUpDefault.css";

class Property1PhonePopUpDefault extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`phone-pop-up-v2 border-1px-black-4 ${className || ""}`}>
        <div className="would-you-like-to-ge roboto-medium-black-38px">Would you like to get a text or an email?</div>
        <div className="overlap-group-container-5">
          <div className="overlap-group3-9">
            <div className="email roboto-medium-white-30px">Email</div>
          </div>
          <div className="overlap-group4-8">
            <div className="text roboto-medium-white-30px">Text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property1PhonePopUpDefault;
