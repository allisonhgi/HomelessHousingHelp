import React from "react";
import Property1Welcome from "../Property1Welcome";
import "./ToolQuestionScreen.css";

class ToolQuestionScreen extends React.Component {
  render() {
    const { property1WelcomeProps } = this.props;

    return (
      <div className="tool-question-screen">
        <Property1Welcome
          obot={property1WelcomeProps.obot}
          clickNextToCont={property1WelcomeProps.clickNextToCont}
          tutorial1={property1WelcomeProps.tutorial1}
          skip={property1WelcomeProps.skip}
        />
      </div>
    );
  }
}

export default ToolQuestionScreen;
