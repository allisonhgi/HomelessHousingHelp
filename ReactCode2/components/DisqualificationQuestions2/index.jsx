import React from "react";
import "./DisqualificationQuestions2.css";

class DisqualificationQuestions2 extends React.Component {
  render() {
    return (
      <div className="disqualification-questions-v2 librebaskerville-normal-black-28px border-1px-black-2">
        <div className="check-if-any-of-the-1">Check if any of the following apply to you:</div>
        <div className="flex-row-66">
          <div className="flex-col-38">
            <div className="rectangle-24-1 border-2-5px-black"></div>
            <img className="rectangle-23-1" src="/img/rectangle-23@2x.svg" />
            <div className="rectangle-2-1 border-2-5px-black"></div>
            <div className="rectangle-16-4 border-2-5px-black"></div>
            <div className="rectangle-2-1 border-2-5px-black"></div>
          </div>
          <div className="youre-a-registered-1">
            You’re a registered lifetime sex offender
            <br />
            You have been convicted of the production of methamphetamines in federally assisted housing
            <br />
            You have a history of violence or abuse towards Public Housing Agencies staff
            <br />
            Nobody in the applying household is documented for residency status
            <br />
            None of the above apply to me
          </div>
        </div>
      </div>
    );
  }
}

export default DisqualificationQuestions2;
