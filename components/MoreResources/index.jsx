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
  position: absolute;
  height: 24px;
  top: 70px;
  left: 1520px;
  display: flex;
  align-items: flex-start;
  min-width: 184px;
  cursor: pointer;

  &.more-resources.more-resources-2 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-3 {
    top: 74px;
    left: 1171px;
  }

  &.more-resources.more-resources-4 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
    cursor: unset;
  }

  &.more-resources.more-resources-5 {
    height: 25px;
    top: 63px;
    left: 1171px;
  }

  &.more-resources.more-resources-6 {
    height: 25px;
    margin-left: 33px;
    margin-top: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-7 {
    height: 26px;
    margin-left: 31px;
    margin-bottom: 1.02px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-8 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-9 {
    margin-left: 31px;
    margin-bottom: 0.98px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-10 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-11 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-12 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-13 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-14 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-15 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-16 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-17 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-18 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-19 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-20 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-21 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-22 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-23 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-24 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-25 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-26 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-27 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-28 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-29 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-30 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-31 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-32 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-33 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-34 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-35 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-36 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-37 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-38 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-39 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.more-resources.more-resources-40 {
    height: 25px;
    margin-left: 31px;
    margin-bottom: 1px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const MoreResources2 = styled.div`
  ${RobotoNormalSummerGreen25px}
  width: 184px;
  min-height: 24px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const MoreResources3 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-2  & {
    min-height: 25px;
  }
`;

const MoreResources4 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-4  & {
    min-height: 25px;
    cursor: pointer;
  }
`;

const MoreResources5 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-5  & {
    min-height: 25px;
  }
`;

const MoreResources6 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-6  & {
    min-height: 25px;
  }
`;

const MoreResources7 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-7  & {
    min-height: 26px;
  }
`;

const MoreResources8 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-8  & {
    min-height: 25px;
  }
`;

const MoreResources9 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-10  & {
    min-height: 25px;
  }
`;

const MoreResources10 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-11  & {
    min-height: 25px;
  }
`;

const MoreResources11 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-12  & {
    min-height: 25px;
  }
`;

const MoreResources12 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-13  & {
    min-height: 25px;
  }
`;

const MoreResources13 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-14  & {
    min-height: 25px;
  }
`;

const MoreResources14 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-15  & {
    min-height: 25px;
  }
`;

const MoreResources15 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-16  & {
    min-height: 25px;
  }
`;

const MoreResources16 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-17  & {
    min-height: 25px;
  }
`;

const MoreResources17 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-18  & {
    min-height: 25px;
  }
`;

const MoreResources18 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-19  & {
    min-height: 25px;
  }
`;

const MoreResources19 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-20  & {
    min-height: 25px;
  }
`;

const MoreResources20 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-21  & {
    min-height: 25px;
  }
`;

const MoreResources21 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-22  & {
    min-height: 25px;
  }
`;

const MoreResources22 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-23  & {
    min-height: 25px;
  }
`;

const MoreResources23 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-24  & {
    min-height: 25px;
  }
`;

const MoreResources24 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-25  & {
    min-height: 25px;
  }
`;

const MoreResources25 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-26  & {
    min-height: 25px;
  }
`;

const MoreResources26 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-27  & {
    min-height: 25px;
  }
`;

const MoreResources27 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-28  & {
    min-height: 25px;
  }
`;

const MoreResources28 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-29  & {
    min-height: 25px;
  }
`;

const MoreResources29 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-30  & {
    min-height: 25px;
  }
`;

const MoreResources30 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-31  & {
    min-height: 25px;
  }
`;

const MoreResources31 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-32  & {
    min-height: 25px;
  }
`;

const MoreResources32 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-33  & {
    min-height: 25px;
  }
`;

const MoreResources33 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-34  & {
    min-height: 25px;
  }
`;

const MoreResources34 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-35  & {
    min-height: 25px;
  }
`;

const MoreResources35 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-36  & {
    min-height: 25px;
  }
`;

const MoreResources36 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-37  & {
    min-height: 25px;
  }
`;

const MoreResources37 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-38  & {
    min-height: 25px;
  }
`;

const MoreResources38 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-39  & {
    min-height: 25px;
  }
`;

const MoreResources39 = styled.div`
  ${RobotoNormalSummerGreen25px}

  .more-resources.more-resources-40  & {
    min-height: 25px;
    margin-top: unset;
  }
`;

export default MoreResources;
