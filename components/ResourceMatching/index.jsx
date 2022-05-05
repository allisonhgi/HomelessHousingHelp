import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LibrebaskervilleNormalBlack18px,
  RobotoMediumWhite25px,
  Header2,
  RobotoMediumBlack28px,
} from "../../styledMixins";
import "./ResourceMatching.css";

class ResourceMatching extends React.Component {
  render() {
    const {
      resourceMatching,
      ifYoureNotSureW,
      voucher1,
      voucherApplicationTool,
      guidanceForThoseI,
      goToVoucherTool,
      house1,
      housingSearchResources,
      housingSearchResou,
      searchForHousing,
      resource1,
      relatedResources,
      generalResourcesFo,
      getMoreResources,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resource-matching screen">
          <FlexCol>
            <NavBar src="/img/nav-bar@1x.svg" />
            <ResourceMatching1>{resourceMatching}</ResourceMatching1>
            <IfYoureNotSureW>{ifYoureNotSureW}</IfYoureNotSureW>
          </FlexCol>
          <FlexRow>
            <FlexCol1>
              <Voucher1 src={voucher1} />
              <VoucherApplicationTool>{voucherApplicationTool}</VoucherApplicationTool>
              <OverlapGroup1>
                <GuidanceForThoseI>{guidanceForThoseI}</GuidanceForThoseI>
                <Link to="/voucher-tool-v3-starting-screen">
                  <TutorialButtons>
                    <GoToVoucherTool>{goToVoucherTool}</GoToVoucherTool>
                  </TutorialButtons>
                </Link>
              </OverlapGroup1>
            </FlexCol1>
            <FlexCol2>
              <House1 src={house1} />
              <HousingSearchResources>{housingSearchResources}</HousingSearchResources>
              <HousingSearchResou>{housingSearchResou}</HousingSearchResou>
              <Link to="/find-a-home">
                <TutorialButtons1>
                  <GoToVoucherTool>{searchForHousing}</GoToVoucherTool>
                </TutorialButtons1>
              </Link>
            </FlexCol2>
            <FlexCol3>
              <Resource1 src={resource1} />
              <RelatedResources>{relatedResources}</RelatedResources>
              <OverlapGroup>
                <GeneralResourcesFo>{generalResourcesFo}</GeneralResourcesFo>
                <Link to="/resources-v3">
                  <TutorialButtons2>
                    <GoToVoucherTool>{getMoreResources}</GoToVoucherTool>
                  </TutorialButtons2>
                </Link>
              </OverlapGroup>
            </FlexCol3>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const FlexCol = styled.div`
  width: 1440px;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 335px;
`;

const NavBar = styled.img`
  width: 1440px;
  height: 162px;
`;

const ResourceMatching1 = styled.div`
  ${Header2}
  width: 526px;
  min-height: 68px;
  margin-top: 30px;
  margin-left: 2px;
  font-weight: 500;
  color: var(--black);
  text-align: center;
`;

const IfYoureNotSureW = styled.div`
  width: 976px;
  min-height: 36px;
  margin-top: 39px;
  font-family: var(--font-family-libre_baskerville);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxxs);
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 587px;
  margin-top: 39px;
  margin-left: 28px;
  display: flex;
  align-items: flex-end;
  min-width: 1272px;
`;

const FlexCol1 = styled.div`
  width: 317px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 587px;
`;

const Voucher1 = styled.img`
  width: 239px;
  height: 239px;
  margin-right: 0.41px;
  object-fit: cover;
`;

const VoucherApplicationTool = styled.div`
  ${RobotoMediumBlack28px}
  width: 317px;
  min-height: 42px;
  margin-top: 22px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  width: 287px;
  height: 262px;
  position: relative;
  margin-top: 22px;
  margin-left: 2px;
`;

const GuidanceForThoseI = styled.div`
  ${LibrebaskervilleNormalBlack18px}
  position: absolute;
  width: 287px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
`;

const TutorialButtons = styled.div`
  position: absolute;
  height: 60px;
  top: 202px;
  left: 2px;
  display: flex;
  padding: 15px 33px;
  align-items: flex-start;
  min-width: 279px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
  cursor: pointer;
`;

const GoToVoucherTool = styled.div`
  ${RobotoMediumWhite25px}
  min-height: 29px;
  letter-spacing: 0;
`;

const FlexCol2 = styled.div`
  width: 362px;
  margin-left: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 546px;
`;

const House1 = styled.img`
  width: 166px;
  height: 166px;
  object-fit: cover;
`;

const HousingSearchResources = styled.div`
  ${RobotoMediumBlack28px}
  width: 351px;
  min-height: 42px;
  margin-top: 54px;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const HousingSearchResou = styled.div`
  ${LibrebaskervilleNormalBlack18px}
  width: 362px;
  min-height: 165px;
  margin-top: 22px;
  letter-spacing: 0;
  line-height: 32px;
`;

const TutorialButtons1 = styled.div`
  height: 60px;
  margin-top: 37px;
  margin-left: 3px;
  display: flex;
  padding: 15px 31px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 279px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
  cursor: pointer;
`;

const FlexCol3 = styled.div`
  width: 372px;
  margin-left: 97px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 560px;
`;

const Resource1 = styled.img`
  width: 189px;
  height: 189px;
  margin-right: 5px;
  object-fit: cover;
`;

const RelatedResources = styled.div`
  ${RobotoMediumBlack28px}
  width: 288px;
  min-height: 42px;
  margin-top: 45px;
  margin-right: 4px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  width: 372px;
  height: 262px;
  position: relative;
  margin-top: 22px;
`;

const GeneralResourcesFo = styled.div`
  ${LibrebaskervilleNormalBlack18px}
  position: absolute;
  width: 372px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
`;

const TutorialButtons2 = styled.div`
  position: absolute;
  height: 60px;
  top: 202px;
  left: 46px;
  display: flex;
  padding: 15px 25px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 279px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;
  cursor: pointer;
`;

export default ResourceMatching;
