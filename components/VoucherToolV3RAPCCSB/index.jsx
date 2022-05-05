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
      regionalAccessPointsV2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap-ccsb screen">
          <OverlapGroup6>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup6>
          <FlexRow>
            <TutorialButtonsContainer>
              <TutorialButtons src="/img/tutorial-buttons-23@2x.svg" />
              <Link to="/voucher-tool-v3-next-steps">
                <TutorialButtons1 src="/img/tutorial-buttons-24@2x.svg" />
              </Link>
            </TutorialButtonsContainer>
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
                <Rectangle100></Rectangle100>
                <CatholicCommunityServicesBellevue>
                  {catholicCommunityServicesBellevue}
                </CatholicCommunityServicesBellevue>
                <Address11061NE2n>{address11061Ne2N}</Address11061NE2n>
                <Link to="/voucher-tool-v3-rap">
                  <Rectangle101 src="/img/rectangle-101@2x.svg" />
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
              <TutorialButtons2 src="/img/tutorial-buttons-25@2x.svg" />
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
  height: 777px;
  margin-top: 63px;
  margin-right: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 1348px;
`;

const TutorialButtonsContainer = styled.div`
  width: 99px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 642px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 504px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 1011px;
  align-self: flex-start;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 776px;
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
  height: 665px;
  position: relative;
`;

const Rectangle100 = styled.div`
  position: absolute;
  width: 945px;
  height: 206px;
  top: 459px;
  left: 32px;
  background-color: var(--midnight-blue);
  box-shadow: 0px 4px 4px #00000040;
`;

const CatholicCommunityServicesBellevue = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 522px;
  top: 483px;
  left: 52px;
  letter-spacing: 0;
`;

const Address11061NE2n = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 907px;
  top: 532px;
  left: 58px;
  letter-spacing: 0;
  line-height: 42px;
`;

const Rectangle101 = styled.img`
  position: absolute;
  width: 186px;
  height: 41px;
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
  top: 532px;
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

const TutorialButtons2 = styled.img`
  width: 125px;
  height: 77px;
  margin-left: 40px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3RAPCCSB;
