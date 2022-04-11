import React from "react";
import "./Property1IneligibleButton.css";

class Property1IneligibleButton extends React.Component {
  render() {
    const { spanText1, spanText2, spanText3 } = this.props;

    return (
      <div className="waitlisted">
        <div className="ive-applied-for-a-v-3 roboto-medium-white-40px">
          <span className="roboto-medium-white-40px">{spanText1}</span>
          <span className="roboto-medium-white-40px">{spanText2}</span>
          <span className="roboto-medium-white-40px">{spanText3}</span>
        </div>
      </div>
    );
  }
}

export default Property1IneligibleButton;
