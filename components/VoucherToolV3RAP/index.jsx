import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import {
  RobotoMediumWhite21px,
  RobotoMediumWhite29px,
  LibrebaskervilleNormalBlack28px,
  Header2,
  Border1pxBlack,
} from "../../styledMixins";
import "./VoucherToolV3RAP.css";

class VoucherToolV3RAP extends React.Component {
  render() {
    const {
      voucherTool,
      regionalAccessPoin,
      catholicCommunityServicesSeattle,
      clickForDetails1,
      multiServiceCenterFederalWay,
      clickForDetails2,
      ymcaRenton,
      clickForDetails3,
      solidGroundSeattle,
      clickForDetails4,
      catholicCommunityServicesBellevue,
      clickForDetails5,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons@2x.svg" />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <OverlapGroupContainer>
                    <OverlapGroup7>
                      <RegionalAccessPoin>{regionalAccessPoin}</RegionalAccessPoin>
                      <Link to="/voucher-tool-v3-rap-ccs">
                        <Rectangle105></Rectangle105>
                      </Link>
                      <CatholicCommunityServicesSeattle>
                        {catholicCommunityServicesSeattle}
                      </CatholicCommunityServicesSeattle>
                      <Link to="/voucher-tool-v3-rap-ccs">
                        <Rectangle110></Rectangle110>
                      </Link>
                      <Link to="/voucher-tool-v3-rap-ccs">
                        <ClickForDetails>{clickForDetails1}</ClickForDetails>
                      </Link>
                    </OverlapGroup7>
                    <OverlapGroup5>
                      <Link to="/voucher-tool-v3-rap-msc">
                        <Rectangle109></Rectangle109>
                      </Link>
                      <MultiServiceCenterFederalWay>{multiServiceCenterFederalWay}</MultiServiceCenterFederalWay>
                      <Link to="/voucher-tool-v3-rap-msc">
                        <Rectangle111 src="/img/rectangle-111@2x.svg" />
                      </Link>
                      <Link to="/voucher-tool-v3-rap-msc">
                        <ClickForDetails1>{clickForDetails2}</ClickForDetails1>
                      </Link>
                    </OverlapGroup5>
                    <OverlapGroup3>
                      <Link to="/voucher-tool-v3-rap-ymca">
                        <Rectangle109></Rectangle109>
                      </Link>
                      <YMCARenton>{ymcaRenton}</YMCARenton>
                      <Link to="/voucher-tool-v3-rap-ymca">
                        <Rectangle112></Rectangle112>
                      </Link>
                      <Link to="/voucher-tool-v3-rap-ymca">
                        <ClickForDetails2>{clickForDetails3}</ClickForDetails2>
                      </Link>
                    </OverlapGroup3>
                    <OverlapGroup6>
                      <Link to="/voucher-tool-v3-rap-sg">
                        <Rectangle109></Rectangle109>
                      </Link>
                      <YMCARenton>{solidGroundSeattle}</YMCARenton>
                      <Link to="/voucher-tool-v3-rap-sg">
                        <Rectangle112></Rectangle112>
                      </Link>
                      <Link to="/voucher-tool-v3-rap-sg">
                        <ClickForDetails2>{clickForDetails4}</ClickForDetails2>
                      </Link>
                    </OverlapGroup6>
                    <OverlapGroup6>
                      <Link to="/voucher-tool-v3-rap-ccsb">
                        <Rectangle109></Rectangle109>
                      </Link>
                      <CatholicCommunityServicesBellevue>
                        {catholicCommunityServicesBellevue}
                      </CatholicCommunityServicesBellevue>
                      <Link to="/voucher-tool-v3-rap-ccsb">
                        <Rectangle112></Rectangle112>
                      </Link>
                      <Link to="/voucher-tool-v3-rap-ccsb">
                        <ClickForDetails3>{clickForDetails5}</ClickForDetails3>
                      </Link>
                    </OverlapGroup6>
                  </OverlapGroupContainer>
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-next-steps">
                <TutorialButtons1 src="/img/tutorial-buttons-1@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons2 src="/img/tutorial-buttons-2@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup2 = styled.div`
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

const OverlapGroupContainer = styled.div`
  ${Border1pxBlack}
  width: 1011px;
  display: flex;
  flex-direction: column;
  padding: 30px 32px;
  align-items: center;
  min-height: 564px;
  background-color: var(--white);
`;

const OverlapGroup7 = styled.div`
  width: 945px;
  height: 119px;
  position: relative;
  align-self: flex-start;
  margin-top: 2px;
`;

const RegionalAccessPoin = styled.div`
  ${LibrebaskervilleNormalBlack28px}
  position: absolute;
  width: 873px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const Rectangle105 = styled.div`
  position: absolute;
  width: 945px;
  height: 75px;
  top: 44px;
  left: 0;
  background-color: var(--midnight-blue);
  cursor: pointer;
`;

const CatholicCommunityServicesSeattle = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 702px;
  top: 65px;
  left: 16px;
  letter-spacing: 0;
`;

const Rectangle110 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 61px;
  left: 748px;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const ClickForDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 158px;
  top: 70px;
  left: 761px;
  letter-spacing: 0;
  cursor: pointer;
`;

const OverlapGroup5 = styled.div`
  width: 945px;
  height: 75px;
  position: relative;
  align-self: flex-start;
  margin-top: 20px;
`;

const Rectangle109 = styled.div`
  position: absolute;
  width: 945px;
  height: 75px;
  top: 0;
  left: 0;
  background-color: var(--midnight-blue);
  cursor: pointer;
`;

const MultiServiceCenterFederalWay = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 702px;
  top: 21px;
  left: 16px;
  letter-spacing: 0;
`;

const Rectangle111 = styled.img`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 18px;
  left: 748px;
  cursor: pointer;
`;

const ClickForDetails1 = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 158px;
  top: 28px;
  left: 761px;
  letter-spacing: 0;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  width: 945px;
  height: 75px;
  position: relative;
  margin-top: 23px;
`;

const YMCARenton = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 702px;
  top: 18px;
  left: 15px;
  letter-spacing: 0;
`;

const Rectangle112 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 18px;
  left: 747px;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const ClickForDetails2 = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 158px;
  top: 26px;
  left: 760px;
  letter-spacing: 0;
  cursor: pointer;
`;

const OverlapGroup6 = styled.div`
  width: 945px;
  height: 75px;
  position: relative;
  margin-top: 20px;
`;

const CatholicCommunityServicesBellevue = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 702px;
  top: 19px;
  left: 15px;
  letter-spacing: 0;
`;

const ClickForDetails3 = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 158px;
  top: 27px;
  left: 760px;
  letter-spacing: 0;
  cursor: pointer;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 25px;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 125px;
  height: 77px;
  margin-left: 40px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3RAP;
