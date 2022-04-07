import React from "react";
import ProgressSavedPopUp2 from "../ProgressSavedPopUp2";
import "./ProgressSavedPopUp.css";

class ProgressSavedPopUp extends React.Component {
  render() {
    const { progressSavedPopUp2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="progress-saved-pop-up-1 screen">
          <ProgressSavedPopUp2 progressHasBeenSa={progressSavedPopUp2Props.progressHasBeenSa} />
        </div>
      </div>
    );
  }
}

export default ProgressSavedPopUp;
