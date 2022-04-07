import React from "react";
import "./Property1Default5.css";

class Property1Default5 extends React.Component {
  render() {
    const { savedVoucherToolData, className } = this.props;

    return (
      <div className={`profile-section-small ${className || ""}`}>
        <div className="saved-voucher-tool-data roboto-medium-black-38px">{savedVoucherToolData}</div>
        <div className="view roboto-medium-shakespeare-25px">View</div>
      </div>
    );
  }
}

export default Property1Default5;
