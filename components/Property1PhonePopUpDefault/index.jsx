import React from "react";
import "./Property1PhonePopUpDefault.css";

class Property1PhonePopUpDefault extends React.Component {
  render() {
    const { wouldYouLikeToGe, email, text } = this.props;

    return (
      <div className="phone-pop-up-v2 border-1px-black-3">
        <div className="would-you-like-to-ge roboto-medium-black-38px">{wouldYouLikeToGe}</div>
        <div className="overlap-group-container-3">
          <div className="overlap-group3-2">
            <div className="email roboto-medium-white-30px">{email}</div>
          </div>
          <div className="overlap-group4-2">
            <div className="text roboto-medium-white-30px">{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property1PhonePopUpDefault;
