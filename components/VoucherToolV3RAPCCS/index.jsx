import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import RegionalAccessPointsV23 from "../RegionalAccessPointsV23";
import styled from "styled-components";
import {
  RobotoMediumWhite21px,
  LibrebaskervilleNormalWhite25px,
  RobotoMediumWhite29px,
  Header2,
} from "../../styledMixins";
import "./VoucherToolV3RAPCCS.css";

class VoucherToolV3RAPCCS extends React.Component {
  render() {
    const {
      voucherTool,
      catholicCommunityServicesSeattle,
      address10023RdAv,
      closeDetails,
      viewOnMap,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      regionalAccessPointsV23Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap-ccs screen">
          <OverlapGroup8>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup8>
          <VoucherTool>{voucherTool}</VoucherTool>
          <OverlapGroup7>
            <RegionalAccessPointsV23
              regionalAccessPoin={regionalAccessPointsV23Props.regionalAccessPoin}
              property1Default51Props={regionalAccessPointsV23Props.property1Default51Props}
              property1Default52Props={regionalAccessPointsV23Props.property1Default52Props}
              property1Default2Props={regionalAccessPointsV23Props.property1Default2Props}
              property1Default1Props={regionalAccessPointsV23Props.property1Default1Props}
              property1Default2Props2={regionalAccessPointsV23Props.property1Default2Props2}
              property1Default3Props={regionalAccessPointsV23Props.property1Default3Props}
            />
            <Rectangle91 src="/img/rectangle-91@1x.svg" />
            <CatholicCommunityServicesSeattle>{catholicCommunityServicesSeattle}</CatholicCommunityServicesSeattle>
            <Address10023rdAv>{address10023RdAv}</Address10023rdAv>
            <Link to="/voucher-tool-v3-rap">
              <Rectangle92></Rectangle92>
            </Link>
            <a
              href="https://www.google.com/maps/place/Catholic+Community+Services/@47.601388,-122.3020461,15z/data=!4m2!3m1!1s0x0:0xd55f44c40ea90d0d?sa=X&ved=2ahUKEwi7oJSR9cb3AhUMfXAKHY4rCbQQ_BJ6BAhbEAU"
              target="_blank"
            >
              <Rectangle93></Rectangle93>
            </a>
            <Vector src="/img/vector-11@2x.svg" />
            <Link to="/voucher-tool-v3-rap">
              <CloseDetails>{closeDetails}</CloseDetails>
            </Link>
            <a
              href="https://www.google.com/maps/place/Catholic+Community+Services/@47.601388,-122.3020461,15z/data=!4m2!3m1!1s0x0:0xd55f44c40ea90d0d?sa=X&ved=2ahUKEwi7oJSR9cb3AhUMfXAKHY4rCbQQ_BJ6BAhbEAU"
              target="_blank"
            >
              <ViewOnMap>{viewOnMap}</ViewOnMap>
            </a>
            <a
              href="https://www.google.com/maps/place/Multi-Service+Center/@47.3013801,-122.3179622,15z/data=!4m2!3m1!1s0x0:0xdbd6bc7b3fcd013e?sa=X&ved=2ahUKEwi9hrOo4cb3AhXTCTQIHdFoDcQQ_BJ6BAhNEAU"
              target="_blank"
            >
              <IconCursor src="/img/vector-12@2x.svg" />
            </a>
          </OverlapGroup7>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-next-steps" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-27@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons1 src="/img/tutorial-buttons-28@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
        </div>
      </div>
    );
  }
}

const OverlapGroup8 = styled.div`
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

const OverlapGroup7 = styled.div`
  width: 1011px;
  height: 564px;
  position: relative;
  margin-top: 1px;
  margin-left: 1px;
`;

const Rectangle91 = styled.img`
  position: absolute;
  width: 961px;
  height: 222px;
  top: 75px;
  left: 25px;
`;

const CatholicCommunityServicesSeattle = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 522px;
  top: 102px;
  left: 52px;
  letter-spacing: 0;
`;

const Address10023rdAv = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 809px;
  top: 141px;
  left: 59px;
  letter-spacing: 0;
  line-height: 42px;
`;

const Rectangle92 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 97px;
  left: 773px;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const Rectangle93 = styled.div`
  position: absolute;
  width: 170px;
  height: 30px;
  top: 142px;
  left: 399px;
  background-color: var(--blue-zodiac);
  border-radius: 12px;
  cursor: pointer;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 117px;
  left: 790px;
`;

const CloseDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 141px;
  top: 104px;
  left: 817px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ViewOnMap = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 163px;
  top: 137px;
  left: 406px;
  letter-spacing: 0;
  line-height: 42px;
  white-space: nowrap;
  cursor: pointer;
`;

const IconCursor = styled.img`
  position: absolute;
  width: 20px;
  height: 16px;
  top: 146px;
  left: 538px;
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

export default VoucherToolV3RAPCCS;
