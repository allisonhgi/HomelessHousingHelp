import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { Header2, Border1pxBlack2, LibrebaskervilleNormalBlack30px } from "../../styledMixins";
import "./VoucherToolV3DisqualificationsNotic.css";

class VoucherToolV3DisqualificationsNotic extends React.Component {
  render() {
    const { voucherTool, spanText1, spanText2, spanText3, spanText4, spanText5, spanText6 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications-notice-page screen">
          <OverlapGroup1>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup1>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons-54@2x.svg" />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <TextInfo>
                    <TheresAPossibilit>
                      <span className="librebaskerville-normal-black-30px">{spanText1}</span>
                      <span className="librebaskerville-bold-black-30px">{spanText2}</span>
                      <span className="librebaskerville-normal-black-30px">{spanText3}</span>
                      <span className="librebaskerville-bold-black-30px">{spanText4}</span>
                      <span className="librebaskerville-normal-black-30px">{spanText5}</span>
                      <span className="librebaskerville-normal-black-30px">{spanText6}</span>
                    </TheresAPossibilit>
                  </TextInfo>
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-disqualifications">
                <TutorialButtons1 src="/img/tutorial-buttons-55@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-required-paperwork">
              <TutorialButtons2 src="/img/tutorial-buttons-53@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  height: 152px;
  position: relative;
  display: flex;
  padding: 38px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const FlexRow = styled.div`
  height: 777px;
  margin-top: 63px;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 1348px;
`;

const FlexCol = styled.div`
  width: 1183px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 777px;
`;

const FlexRow1 = styled.div`
  height: 675px;
  display: flex;
  align-items: flex-start;
  min-width: 1183px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
  margin-top: 135px;
`;

const FlexCol1 = styled.div`
  width: 1011px;
  margin-left: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 675px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  margin-right: 2px;
  font-weight: 500;
  color: var(--black);
`;

const TextInfo = styled.div`
  ${Border1pxBlack2}
  height: 564px;
  display: flex;
  padding: 26px 51px;
  align-items: flex-start;
  min-width: 1011px;
  background-color: var(--white);
`;

const TheresAPossibilit = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  width: 907px;
  min-height: 475px;
  letter-spacing: 0;
  line-height: 38px;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 25px;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 66px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3DisqualificationsNotic;
