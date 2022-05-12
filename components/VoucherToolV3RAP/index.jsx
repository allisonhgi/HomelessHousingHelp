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
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap screen">
          <OverlapGroup2>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup2>
          <VoucherTool>{voucherTool}</VoucherTool>
          <OverlapGroupContainer>
            <OverlapGroup7>
              <RegionalAccessPoin>{regionalAccessPoin}</RegionalAccessPoin>
              <Link to="/voucher-tool-v3-rap-ccs">
                <Rectangle105></Rectangle105>
              </Link>
              <CatholicCommunityServicesSeattle>{catholicCommunityServicesSeattle}</CatholicCommunityServicesSeattle>
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
              <CatholicCommunityServicesBellevue>{catholicCommunityServicesBellevue}</CatholicCommunityServicesBellevue>
              <Link to="/voucher-tool-v3-rap-ccsb">
                <Rectangle112></Rectangle112>
              </Link>
              <Link to="/voucher-tool-v3-rap-ccsb">
                <ClickForDetails3>{clickForDetails5}</ClickForDetails3>
              </Link>
            </OverlapGroup6>
          </OverlapGroupContainer>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-next-steps" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-1@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons1 src="/img/tutorial-buttons-2@2x.svg" />
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
  display: flex;
  padding: 38px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  margin-top: 62px;
  margin-right: 1px;
  font-weight: 500;
  color: var(--black);
`;

const OverlapGroupContainer = styled.div`
  ${Border1pxBlack}
  width: 1011px;
  margin-top: 1px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 30px 32px;
  align-items: center;
  min-height: 564px;
  background-color: var(--white);
`;

const OverlapGroup7 = styled.div`
  width: 945px;
  height: 120px;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
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
  top: 45px;
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
  top: 62px;
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
  top: 20px;
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
  top: 27px;
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
  top: 17px;
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
  top: 25px;
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
  top: 18px;
  left: 15px;
  letter-spacing: 0;
`;

const ClickForDetails3 = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 158px;
  top: 26px;
  left: 760px;
  letter-spacing: 0;
  cursor: pointer;
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  margin-top: 24px;
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
  width: 125px;
  height: 77px;
  margin-left: 1124px;
  cursor: pointer;
`;

export default VoucherToolV3RAP;
