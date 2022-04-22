import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import Property1Default3 from "../Property1Default3";
import styled from "styled-components";
import { LibrebaskervilleNormalBlack28px, Header2, Border25pxBlack } from "../../styledMixins";
import "./VoucherToolV3Disqualifications.css";

class VoucherToolV3Disqualifications extends React.Component {
  render() {
    const { voucherTool, line1, noneOfTheAboveApplyToMe, property1AudioProps, property1Default3Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <OverlapGroup3>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src={line1} />
          </OverlapGroup3>
          <FlexRow>
            <Property1Audio className={property1AudioProps.className} />
            <OverlapGroup4>
              <Property1Default3
                checkIfAnyOfThe={property1Default3Props.checkIfAnyOfThe}
                youreARegistered={property1Default3Props.youreARegistered}
              />
              <Link to="/voucher-tool-v3-disqualifications-checked">
                <NoneOfTheAboveApplyToMe>{noneOfTheAboveApplyToMe}</NoneOfTheAboveApplyToMe>
              </Link>
              <Link to="/voucher-tool-v3-disqualifications-checked">
                <Rectangle90></Rectangle90>
              </Link>
            </OverlapGroup4>
          </FlexRow>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-eligibility-questions" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-15@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-disqualifications-notice-page">
              <TutorialButtons1 src="/img/tutorial-buttons-14@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup2 = styled.div`
  height: 152px;
  position: relative;
  margin-left: 1px;
  display: flex;
  padding: 38px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup3 = styled.div`
  width: 1440px;
  height: 111px;
  position: relative;
  align-self: flex-end;
  margin-top: 63px;
  margin-right: -5px;
`;

const VoucherTool = styled.div`
  ${Header2}
  position: absolute;
  width: 405px;
  top: 0;
  left: 512px;
  font-weight: 500;
  color: var(--black);
`;

const Line1 = styled.img`
  position: absolute;
  width: 1440px;
  height: 1px;
  top: 82px;
  left: 0;
`;

const FlexRow = styled.div`
  position: relative;
  margin-left: 44px;
  display: flex;
  align-items: flex-start;
  min-width: 1182px;
`;

const OverlapGroup4 = styled.div`
  width: 1005px;
  height: 556px;
  position: relative;
  margin-left: 121px;
`;

const NoneOfTheAboveApplyToMe = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  position: absolute;
  width: 823px;
  top: 466px;
  left: 119px;
  letter-spacing: 0;
  line-height: 55px;
  white-space: nowrap;
  cursor: pointer;
`;

const Rectangle90 = styled.div`
  ${Border25pxBlack}
  position: absolute;
  width: 31px;
  height: 30px;
  top: 480px;
  left: 68px;
  background-color: var(--white);
  cursor: pointer;
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  align-self: center;
  margin-top: 32px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 1348px;
`;

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  align-self: flex-end;
  cursor: pointer;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 1150px;
  cursor: pointer;
`;

export default VoucherToolV3Disqualifications;
