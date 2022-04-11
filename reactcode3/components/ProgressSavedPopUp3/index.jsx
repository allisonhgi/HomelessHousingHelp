import React from "react";
import ProgressSavedPopUp4 from "../ProgressSavedPopUp4";
import "./ProgressSavedPopUp3.css";

class ProgressSavedPopUp3 extends React.Component {
  render() {
    const { progressSavedPopUp4Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="progress-saved-pop-up-2 screen">
          <ProgressSavedPopUp4
            progressHasBeenSa={progressSavedPopUp4Props.progressHasBeenSa}
            groupProps={progressSavedPopUp4Props.groupProps}
          />
        </div>
      </div>
    );
  }
}

export default ProgressSavedPopUp3;
