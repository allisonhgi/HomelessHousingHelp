import React from "react";
import "./Group.css";

class Group extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`group ${className || ""}`}>
        <img className="vector-125" src="" />
      </div>
    );
  }
}

export default Group;
