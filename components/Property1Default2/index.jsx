import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite40px } from "../../styledMixins";


class Property1Default2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <HaventAppliedButton className={`havent-applied-button ${className || ""}`}>
        <IHaventAppliedFo className="i-havent-applied-fo">
          I haven’t applied for a voucher but would like to.
        </IHaventAppliedFo>
      </HaventAppliedButton>
    );
  }
}

const HaventAppliedButton = styled.div`
  position: absolute;
  height: 495px;
  top: 0;
  left: 0;
  display: flex;
  padding: 20px 14px;
  align-items: flex-start;
  min-width: 410px;
  background-color: var(--midnight-blue);
  border-radius: 5px;

  &.havent-applied-button.havent-applied-button-2 {
    position: unset;
    top: unset;
    left: unset;
  }
`;

const IHaventAppliedFo = styled.div`
  ${RobotoMediumWhite40px}
  width: 368px;
  min-height: 75px;
  letter-spacing: 0;
`;

const IHaventAppliedFo1 = styled.div`
  ${RobotoMediumWhite40px}

  .havent-applied-button.havent-applied-button-2  & {
    cursor: pointer;
  }
`;

export default Property1Default2;
