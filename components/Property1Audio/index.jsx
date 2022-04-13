import React from "react";
import "./Property1Audio.css";

class Property1Audio extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`tutorial-buttons-3 ${className || ""}`}>
        <div className="volume_up">
          <div className="overlap-group-6">
            <img className="vector-18" src="/img/vector@2x.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Property1Audio;
