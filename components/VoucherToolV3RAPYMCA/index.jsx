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
      regionalAccessPointsV22Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap-ymca screen">
          <OverlapGroup5>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup5>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons-15@2x.svg" />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <OverlapGroup4>
                    <RegionalAccessPointsV22
                      property1Default1Props={regionalAccessPointsV22Props.property1Default1Props}
                      property1Default2Props={regionalAccessPointsV22Props.property1Default2Props}
                      property1Default3Props={regionalAccessPointsV22Props.property1Default3Props}
                    />
                    <Rectangle97></Rectangle97>
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
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-next-steps">
                <TutorialButtons1 src="/img/tutorial-buttons-16@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons2 src="/img/tutorial-buttons-17@2x.svg" />
            </Link>
          </FlexRow>
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

const OverlapGroup4 = styled.div`
  width: 1011px;
  height: 564px;
  position: relative;
`;

const Rectangle97 = styled.div`
  position: absolute;
  width: 945px;
  height: 206px;
  top: 270px;
  left: 33px;
  background-color: var(--midnight-blue);
  box-shadow: 0px 4px 4px #00000040;
`;

const YMCARenton = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 522px;
  top: 290px;
  left: 52px;
  letter-spacing: 0;
`;

const Address13750Newca = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 907px;
  top: 332px;
  left: 58px;
  letter-spacing: 0;
  line-height: 42px;
`;

const Rectangle98 = styled.div`
  position: absolute;
  width: 186px;
  height: 41px;
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
  top: 289px;
  left: 818px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ViewOnMap = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 163px;
  top: 328px;
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

export default VoucherToolV3RAPYMCA;
