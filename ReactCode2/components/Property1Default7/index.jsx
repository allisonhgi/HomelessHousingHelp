import React from "react";
import "./Property1Default7.css";

class Property1Default7 extends React.Component {
  render() {
    const { savedVoucherToolData, className } = this.props;

    return (
      <div className={`profile-section-v2-2 ${className || ""}`}>
        <div className="overlap-group-76">
          <div className="saved-voucher-tool-data-1 roboto-medium-black-38px">{savedVoucherToolData}</div>
          <div className="view-1 roboto-medium-shakespeare-25px">View</div>
        </div>
      </div>
    );
  }
}

export default Property1Default7;
