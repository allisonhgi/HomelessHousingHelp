import React from "react";
import Group from "../Group";
import "./ProgressSavedPopUp4.css";

class ProgressSavedPopUp4 extends React.Component {
  render() {
    const { progressHasBeenSa, groupProps } = this.props;

    return (
      <div className="progress-saved-pop-up-3">
        <div className="progress-has-been-sa-1 roboto-medium-white-32px">{progressHasBeenSa}</div>
        <div className="bix-circle">
          <Group className={groupProps.className} />
        </div>
      </div>
    );
  }
}

export default ProgressSavedPopUp4;
