import React from "react";
import { Link } from "react-router-dom";
import "./MoreResources.css";

class MoreResources extends React.Component {
  render() {
    return (
      <div className="more-resources-24">
        <Link to="/resources-v3-1">
          <div className="more-resources-25 roboto-normal-summer-green-25px">More Resources</div>
        </Link>
      </div>
    );
  }
}

export default MoreResources;
