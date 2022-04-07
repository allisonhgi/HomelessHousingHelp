import React from "react";
import "./TextInfo2.css";

class TextInfo2 extends React.Component {
  render() {
    const { spanText1, spanText2, spanText3 } = this.props;

    return (
      <div className="text-info-5 border-1px-black-2">
        <div className="no-documents-are-nee-3 librebaskerville-normal-black-30px">
          <span className="librebaskerville-normal-black-30px">{spanText1}</span>
          <span className="librebaskerville-bold-black-30px">{spanText2}</span>
          <span className="librebaskerville-normal-black-30px">{spanText3}</span>
        </div>
      </div>
    );
  }
}

export default TextInfo2;
