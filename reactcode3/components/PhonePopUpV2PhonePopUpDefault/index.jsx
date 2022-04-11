import React from "react";
import Property1PhonePopUpDefault from "../Property1PhonePopUpDefault";
import "./PhonePopUpV2PhonePopUpDefault.css";

class PhonePopUpV2PhonePopUpDefault extends React.Component {
  render() {
    const { property1PhonePopUpDefaultProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phone-pop-up-v2-phone-pop-up-default-1 screen">
          <Property1PhonePopUpDefault className={property1PhonePopUpDefaultProps.className} />
        </div>
      </div>
    );
  }
}

export default PhonePopUpV2PhonePopUpDefault;
