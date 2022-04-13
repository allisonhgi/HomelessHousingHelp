import React from "react";
import "./Property1Default4.css";

class Property1Default4 extends React.Component {
  render() {
    const { checkIfAnyOfThe, youreARegistered } = this.props;

    return (
      <div className="disqualification-questions-v2 librebaskerville-normal-black-28px border-1px-black-2">
        <div className="check-if-any-of-the">{checkIfAnyOfThe}</div>
        <div className="flex-row-20">
          <div className="flex-col-1">
            <div className="rectangle-24 border-2-5px-black"></div>
            <img className="rectangle-23" src="/img/rectangle-23@2x.svg" />
            <div className="rectangle-2 border-2-5px-black"></div>
            <div className="rectangle-16 border-2-5px-black"></div>
            <div className="rectangle-2 border-2-5px-black"></div>
          </div>
          <div className="youre-a-registered">{youreARegistered}</div>
        </div>
      </div>
    );
  }
}

export default Property1Default4;
