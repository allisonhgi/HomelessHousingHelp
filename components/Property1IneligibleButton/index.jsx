import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite40px } from "../../styledMixins";


class Property1IneligibleButton extends React.Component {
  render() {
    const { spanText1, spanText2, spanText3 } = this.props;

    return (
      <Waitlisted>
        <Link to="/voucher-tools-page-waitlist-expand">
          <IveAppliedForAV>
            <span className="roboto-medium-white-40px">{spanText1}</span>
            <span className="roboto-medium-white-40px">{spanText2}</span>
            <span className="roboto-medium-white-40px">{spanText3}</span>
          </IveAppliedForAV>
        </Link>
      </Waitlisted>
    );
  }
}

const Waitlisted = styled.div`
  height: 495px;
  margin-left: 39px;
  display: flex;
  padding: 19px 21px;
  align-items: flex-start;
  min-width: 410px;
  background-color: var(--hippie-blue);
  border-radius: 5px;
`;

const IveAppliedForAV = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 435px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default Property1IneligibleButton;
