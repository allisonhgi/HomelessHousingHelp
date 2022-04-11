import React from "react";
import "./TextInfo.css";

class TextInfo extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`text-info border-1px-black-2 ${className || ""}`}>
        <div className="no-documents-are-nee librebaskerville-normal-black-30px">{children}</div>
      </div>
    );
  }
}

export default TextInfo;
