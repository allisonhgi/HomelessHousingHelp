import React from "react";
import "./TextInfo4.css";

class TextInfo4 extends React.Component {
  render() {
    const { spanText1, spanText2, spanText3 } = this.props;

    return (
      <div className="text-info-9 border-1px-black-2">
        <div className="check-if-any-of-the-below-apply librebaskerville-normal-black-30px">
          <span className="librebaskerville-normal-black-30px">{spanText1}</span>
          <span className="librebaskerville-bold-black-30px">{spanText2}</span>
          <span className="librebaskerville-normal-black-30px">{spanText3}</span>
        </div>
      </div>
    );
  }
}

export default TextInfo4;
