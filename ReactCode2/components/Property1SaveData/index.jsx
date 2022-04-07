import React from "react";
import { Link } from "react-router-dom";
import "./Property1SaveData.css";

class Property1SaveData extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`tutorial-buttons-36 ${className || ""}`}>
        <div className="save-data roboto-medium-white-30px">Save Data</div>
      </div>
    );
  }
}

export default Property1SaveData;
