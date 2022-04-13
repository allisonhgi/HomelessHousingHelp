import React from "react";
import "./TextInfo.css";

class TextInfo extends React.Component {
  render() {
    return (
      <div className="text-info border-1px-black-2">
        <div className="no-documents-are-nee librebaskerville-normal-black-30px">
          You’ve reached the end of our voucher tool! <br />
          <br />
          If you’d like, please choose how you’d like to get a summary of the information provided by this tool:
        </div>
      </div>
    );
  }
}

export default TextInfo;
