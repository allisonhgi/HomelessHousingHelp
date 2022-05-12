import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import RegionalAccessPointsV2 from "../RegionalAccessPointsV2";
import styled from "styled-components";
import {
  RobotoMediumWhite21px,
  LibrebaskervilleNormalWhite25px,
  RobotoMediumWhite29px,
  Header2,
} from "../../styledMixins";
import "./VoucherToolV3RAPCCSB.css";

class VoucherToolV3RAPCCSB extends React.Component {
  render() {
    const {
      voucherTool,
      catholicCommunityServicesBellevue,
      address11061Ne2N,
      closeDetails,
      viewOnMap,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      regionalAccessPointsV2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap-ccsb screen">
          <OverlapGroup6>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup6>
          <FlexRow>
            <Link to="/voucher-tool-v3-next-steps">
              <TutorialButtons src="/img/tutorial-buttons-24@2x.svg" />
            </Link>
            <FlexCol>
              <VoucherTool>{voucherTool}</VoucherTool>
              <OverlapGroup5>
                <RegionalAccessPointsV2
                  regionalAccessPoin={regionalAccessPointsV2Props.regionalAccessPoin}
                  property1Default1Props={regionalAccessPointsV2Props.property1Default1Props}
                  property1Default2Props={regionalAccessPointsV2Props.property1Default2Props}
                  property1Default3Props={regionalAccessPointsV2Props.property1Default3Props}
                  property1Default4Props={regionalAccessPointsV2Props.property1Default4Props}
                />
                <Rectangle100 src="/img/rectangle-100@1x.svg" />
                <CatholicCommunityServicesBellevue>
                  {catholicCommunityServicesBellevue}
                </CatholicCommunityServicesBellevue>
                <Address11061NE2n>{address11061Ne2N}</Address11061NE2n>
                <Link to="/voucher-tool-v3-rap">
                  <Rectangle101 src="/img/rectangle-111@2x.svg" />
                </Link>
                <a
                  href="https://www.google.com/maps/place/11061+NE+2nd+St,+Bellevue,+WA+98004/data=!4m2!3m1!1s0x54906c62eefea6c7:0xcd2c90d00b771419?sa=X&ved=2ahUKEwilqsWx-Mb3AhXBKH0KHakHDpgQ8gF6BAgCEAE"
                  target="_blank"
                >
                  <Rectangle102 src="/img/rectangle-102@2x.svg" />
                </a>
                <Vector src="/img/vector-11@2x.svg" />
                <Link to="/voucher-tool-v3-rap">
                  <CloseDetails>{closeDetails}</CloseDetails>
                </Link>
                <a
                  href="https://www.google.com/maps/place/11061+NE+2nd+St,+Bellevue,+WA+98004/data=!4m2!3m1!1s0x54906c62eefea6c7:0xcd2c90d00b771419?sa=X&ved=2ahUKEwilqsWx-Mb3AhXBKH0KHakHDpgQ8gF6BAgCEAE"
                  target="_blank"
                >
                  <ViewOnMap>{viewOnMap}</ViewOnMap>
                </a>
                <IconCursor src="/img/vector-28@2x.svg" />
              </OverlapGroup5>
            </FlexCol>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons1 src="/img/tutorial-buttons-25@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup6 = styled.div`
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
  height: 789px;
  margin-top: 62px;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 1348px;
`;

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  margin-bottom: 11px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 1011px;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 789px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  margin-right: 2px;
  font-weight: 500;
  color: var(--black);
`;

const OverlapGroup5 = styled.div`
  width: 1011px;
  height: 677px;
  position: relative;
  margin-top: 1px;
`;

const Rectangle100 = styled.img`
  position: absolute;
  width: 961px;
  height: 222px;
  top: 455px;
  left: 24px;
`;

const CatholicCommunityServicesBellevue = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 522px;
  top: 482px;
  left: 52px;
  letter-spacing: 0;
`;

const Address11061NE2n = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 907px;
  top: 531px;
  left: 58px;
  letter-spacing: 0;
  line-height: 42px;
`;

const Rectangle101 = styled.img`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 477px;
  left: 779px;
  cursor: pointer;
`;

const Rectangle102 = styled.img`
  position: absolute;
  width: 170px;
  height: 30px;
  top: 538px;
  left: 384px;
  cursor: pointer;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 497px;
  left: 795px;
`;

const CloseDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 141px;
  top: 484px;
  left: 820px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ViewOnMap = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 163px;
  top: 531px;
  left: 391px;
  letter-spacing: 0;
  line-height: 42px;
  white-space: nowrap;
  cursor: pointer;
`;

const IconCursor = styled.img`
  position: absolute;
  width: 20px;
  height: 16px;
  top: 545px;
  left: 521px;
`;

const TutorialButtons1 = styled.img`
  width: 125px;
  height: 77px;
  margin-left: 40px;
  margin-bottom: 12px;
  cursor: pointer;
`;

export default VoucherToolV3RAPCCSB;
