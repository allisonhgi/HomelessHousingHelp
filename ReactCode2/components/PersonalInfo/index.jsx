import React from "react";
import "./PersonalInfo.css";

class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="personal-info-1">
        <div className="overlap-group4-11">
          <div className="rectangle-9-1"></div>
          <div className="personal-information-1 roboto-medium-black-38px">Personal Information</div>
          <div className="full-name-john-doe-1 robotoslab-normal-white-30px">
            <span className="robotoslab-normal-black-30px">Full Name: </span>
            <span className="robotoslab-normal-black-30px-2">
              John Doe
              <br />
            </span>
            <span className="robotoslab-normal-black-30px">Housing Status: </span>
            <span className="robotoslab-normal-black-30px-2">
              At-Risk
              <br />
            </span>
            <span className="robotoslab-normal-black-30px">Email: </span>
            <span className="robotoslab-normal-black-30px-2">
              jdoe@gmail.com
              <br />
            </span>
            <span className="robotoslab-normal-black-30px">Case Manager: </span>
            <span className="robotoslab-normal-black-30px-2">
              Clark Kent
              <br />
            </span>
            <span className="robotoslab-normal-black-30px">Case Manager Contact: </span>
            <span className="robotoslab-normal-black-30px-2">kentc@gmail.com</span>
          </div>
          <div className="edit-1 roboto-medium-summer-green-30px">Edit</div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
