import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite40px } from "../../styledMixins";


class Property1Default7 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ReceivedVoucherButton>
        <Link to="/voucher-tools-page-received-expand">
          <IveAppliedForAV>{children}</IveAppliedForAV>
        </Link>
      </ReceivedVoucherButton>
    );
  }
}

const ReceivedVoucherButton = styled.div`
  height: 495px;
  margin-left: 38px;
  display: flex;
  padding: 21px 20px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 410px;
  background-color: var(--amazon);
  border-radius: 5px;
`;

const IveAppliedForAV = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 75px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default Property1Default7;
