import React from "react";
import Group from "../Group";
import "./ProgressSavedPopUp2.css";

class ProgressSavedPopUp2 extends React.Component {
  render() {
    const { progressHasBeenSa } = this.props;

    return (
      <div className="progress-saved-pop-up">
        <div className="progress-has-been-sa roboto-medium-white-32px">{progressHasBeenSa}</div>
        <Group />
      </div>
    );
  }
}

export default ProgressSavedPopUp2;
