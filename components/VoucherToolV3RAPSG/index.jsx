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
import "./VoucherToolV3RAPSG.css";

class VoucherToolV3RAPSG extends React.Component {
  render() {
    const {
      voucherTool,
      solidGroundSeattle,
      address1501N45Th,
      closeDetails,
      viewOnMap,
      regionalAccessPointsV22Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap-sg screen">
          <OverlapGroup5>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup5>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons-12@2x.svg" />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <OverlapGroup4>
                    <RegionalAccessPointsV22
                      property1Default1Props={regionalAccessPointsV22Props.property1Default1Props}
                      property1Default2Props={regionalAccessPointsV22Props.property1Default2Props}
                      property1Default3Props={regionalAccessPointsV22Props.property1Default3Props}
                    />
                    <Rectangle97></Rectangle97>
                    <SolidGroundSeattle>{solidGroundSeattle}</SolidGroundSeattle>
                    <Address1501N45th>{address1501N45Th}</Address1501N45th>
                    <Link to="/voucher-tool-v3-rap">
                      <Rectangle98 src="/img/rectangle-98@2x.svg" />
                    </Link>
                    <a
                      href="https://www.google.com/maps/place/Solid+Ground/@47.6612809,-122.3391237,15z/data=!4m2!3m1!1s0x0:0xd36b1321c1819a7e?sa=X&ved=2ahUKEwi7zLXF98b3AhUiLX0KHb1MCiYQ_BJ6BAhPEAU"
                      target="_blank"
                    >
                      <Rectangle99></Rectangle99>
                    </a>
                    <Vector src="/img/vector-11@2x.svg" />
                    <Link to="/voucher-tool-v3-rap">
                      <CloseDetails>{closeDetails}</CloseDetails>
                    </Link>
                    <a
                      href="https://www.google.com/maps/place/Solid+Ground/@47.6612809,-122.3391237,15z/data=!4m2!3m1!1s0x0:0xd36b1321c1819a7e?sa=X&ved=2ahUKEwi7zLXF98b3AhUiLX0KHb1MCiYQ_BJ6BAhPEAU"
                      target="_blank"
                    >
                      <ViewOnMap>{viewOnMap}</ViewOnMap>
                    </a>
                    <IconCursor src="/img/vector-12@2x.svg" />
                  </OverlapGroup4>
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-next-steps">
                <TutorialButtons1 src="/img/tutorial-buttons-13@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons2 src="/img/tutorial-buttons-14@2x.svg" />
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
  height: 684px;
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
  min-height: 684px;
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
  height: 573px;
  position: relative;
`;

const Rectangle97 = styled.div`
  position: absolute;
  width: 945px;
  height: 206px;
  top: 367px;
  left: 33px;
  background-color: var(--midnight-blue);
  box-shadow: 0px 4px 4px #00000040;
`;

const SolidGroundSeattle = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 522px;
  top: 386px;
  left: 52px;
  letter-spacing: 0;
`;

const Address1501N45th = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 907px;
  top: 433px;
  left: 58px;
  letter-spacing: 0;
  line-height: 42px;
`;

const Rectangle98 = styled.img`
  position: absolute;
  width: 186px;
  height: 41px;
  top: 379px;
  left: 779px;
  cursor: pointer;
`;

const Rectangle99 = styled.div`
  position: absolute;
  width: 170px;
  height: 30px;
  top: 433px;
  left: 375px;
  background-color: var(--blue-zodiac);
  border-radius: 12px;
  cursor: pointer;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 398px;
  left: 795px;
`;

const CloseDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 141px;
  top: 387px;
  left: 818px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ViewOnMap = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 163px;
  top: 427px;
  left: 382px;
  letter-spacing: 0;
  line-height: 42px;
  white-space: nowrap;
  cursor: pointer;
`;

const IconCursor = styled.img`
  position: absolute;
  width: 20px;
  height: 16px;
  top: 437px;
  left: 514px;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 16px;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 125px;
  height: 77px;
  margin-left: 40px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3RAPSG;
