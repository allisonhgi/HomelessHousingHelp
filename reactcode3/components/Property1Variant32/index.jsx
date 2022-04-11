import React from "react";
import "./Property1Variant32.css";

class Property1Variant32 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`text-field-1 ${className || ""}`}>
        <div className="user-name roboto-medium-gunsmoke-35px">{children}</div>
      </div>
    );
  }
}

export default Property1Variant32;
