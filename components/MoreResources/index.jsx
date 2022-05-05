import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoNormalSummerGreen25px } from "../../styledMixins";


class MoreResources extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Link to="/resources-v3">
        <MoreResources1 className={`more-resources ${className || ""}`}>
          <MoreResources2 className="more-resources-1">More Resources</MoreResources2>
        </MoreResources1>
      </Link>
    );
  }
}

const MoreResources1 = styled.div`
  height: 25px;
  margin-left: 31px;
  margin-bottom: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 184px;
  cursor: pointer;

  &.more-resources.more-resources-2 {
    cursor: unset;
  }

  &.more-resources.more-resources-3 {
    position: absolute;
    top: 63px;
    left: 1171px;
    margin-left: unset;
    margin-bottom: unset;
  }

  &.more-resources.more-resources-4 {
    margin-left: 33px;
    margin-top: 1px;
    margin-bottom: unset;
  }

  &.more-resources.more-resources-5 {
    height: 26px;
    margin-bottom: 1.02px;
  }

  &.more-resources.more-resources-7 {
    height: 24px;
    margin-bottom: 0.98px;
  }
`;

const MoreResources2 = styled.div`
  ${RobotoNormalSummerGreen25px}
  width: 184px;
  min-height: 25px;
  letter-spacing: 0;
`;

const MoreResources3 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-2  & {
    cursor: pointer;
  }
`;

const MoreResources4 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-5  & {
    min-height: 26px;
  }
`;

const MoreResources5 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-7  & {
    min-height: 24px;
  }
`;

export default MoreResources;
