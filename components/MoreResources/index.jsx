import React from "react";
import { Link } from "react-router-dom";
import "./MoreResources.css";

class MoreResources extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Link to="/resources-v3">
        <div className={`more-resources ${className || ""}`}>
          <div className="more-resources-1 roboto-normal-summer-green-25px">More Resources</div>
        </div>
      </Link>
    );
  }
}

export default MoreResources;
