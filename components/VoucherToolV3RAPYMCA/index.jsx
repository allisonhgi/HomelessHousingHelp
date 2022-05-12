import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import RegionalAccessPointsV22 from "../RegionalAccessPointsV22";
import styled from "styled-components";
import {
  RobotoMediumWhite21px,
  LibrebaskervilleNormalWhite25px,
  RobotoMediumWhite29px,
  Header2,
} from "../../styledMixins";
import "./VoucherToolV3RAPYMCA.css";

class VoucherToolV3RAPYMCA extends React.Component {
  render() {
    const {
      voucherTool,
      ymcaRenton,
      address13750Newca,
      closeDetails,
      viewOnMap,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      regionalAccessPointsV22Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap-ymca screen">
          <OverlapGroup5>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup5>
          <VoucherTool>{voucherTool}</VoucherTool>
          <OverlapGroup4>
            <RegionalAccessPointsV22
              property1Default1Props={regionalAccessPointsV22Props.property1Default1Props}
              property1Default2Props={regionalAccessPointsV22Props.property1Default2Props}
              property1Default3Props={regionalAccessPointsV22Props.property1Default3Props}
            />
            <Rectangle97 src="/img/rectangle-97-1@1x.svg" />
            <YMCARenton>{ymcaRenton}</YMCARenton>
            <Address13750Newca>{address13750Newca}</Address13750Newca>
            <Link to="/voucher-tool-v3-rap">
              <Rectangle98></Rectangle98>
            </Link>
            <a
              href="https://www.google.com/maps/place/Coal+Creek+Family+YMCA/@47.5409916,-122.1559123,15z/data=!4m2!3m1!1s0x0:0xdc421f33ae7d6b7d?sa=X&ved=2ahUKEwiZleiI98b3AhWOFTQIHQJbBvsQ_BJ6BAhWEAU"
              target="_blank"
            >
              <Rectangle99></Rectangle99>
            </a>
            <Vector src="/img/vector-11@2x.svg" />
            <Link to="/voucher-tool-v3-rap">
              <CloseDetails>{closeDetails}</CloseDetails>
            </Link>
            <a
              href="https://www.google.com/maps/place/Coal+Creek+Family+YMCA/@47.5409916,-122.1559123,15z/data=!4m2!3m1!1s0x0:0xdc421f33ae7d6b7d?sa=X&ved=2ahUKEwiZleiI98b3AhWOFTQIHQJbBvsQ_BJ6BAhWEAU"
              target="_blank"
            >
              <ViewOnMap>{viewOnMap}</ViewOnMap>
            </a>
            <IconCursor src="/img/vector-12@2x.svg" />
          </OverlapGroup4>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-next-steps" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-16@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons1 src="/img/tutorial-buttons-17@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup5 = styled.div`
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

const OverlapGroup4 = styled.div`
  width: 1011px;
  height: 564px;
  position: relative;
  margin-top: 1px;
  margin-left: 1px;
`;

const Rectangle97 = styled.img`
  position: absolute;
  width: 961px;
  height: 222px;
  top: 266px;
  left: 25px;
`;

const YMCARenton = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 522px;
  top: 289px;
  left: 52px;
  letter-spacing: 0;
`;

const Address13750Newca = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 907px;
  top: 331px;
  left: 58px;
  letter-spacing: 0;
  line-height: 42px;
`;

const Rectangle98 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 282px;
  left: 779px;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const Rectangle99 = styled.div`
  position: absolute;
  width: 170px;
  height: 30px;
  top: 334px;
  left: 576px;
  background-color: var(--blue-zodiac);
  border-radius: 12px;
  cursor: pointer;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 302px;
  left: 795px;
`;

const CloseDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 141px;
  top: 290px;
  left: 818px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ViewOnMap = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 163px;
  top: 327px;
  left: 586px;
  letter-spacing: 0;
  line-height: 42px;
  white-space: nowrap;
  cursor: pointer;
`;

const IconCursor = styled.img`
  position: absolute;
  width: 20px;
  height: 16px;
  top: 338px;
  left: 715px;
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

export default VoucherToolV3RAPYMCA;
