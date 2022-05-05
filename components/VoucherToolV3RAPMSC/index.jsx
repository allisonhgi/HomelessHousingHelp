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
import "./VoucherToolV3RAPMSC.css";

class VoucherToolV3RAPMSC extends React.Component {
  render() {
    const {
      voucherTool,
      multiServiceCenterFederalWay,
      address1200South,
      closeDetails,
      viewOnMap,
      regionalAccessPointsV22Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap-msc screen">
          <OverlapGroup5>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup5>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons-20@2x.svg" />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <OverlapGroup4>
                    <RegionalAccessPointsV22
                      property1Default1Props={regionalAccessPointsV22Props.property1Default1Props}
                      property1Default2Props={regionalAccessPointsV22Props.property1Default2Props}
                      property1Default3Props={regionalAccessPointsV22Props.property1Default3Props}
                    />
                    <Rectangle94></Rectangle94>
                    <MultiServiceCenterFederalWay>{multiServiceCenterFederalWay}</MultiServiceCenterFederalWay>
                    <Address1200South>{address1200South}</Address1200South>
                    <Link to="/voucher-tool-v3-rap">
                      <Rectangle95></Rectangle95>
                    </Link>
                    <a
                      href="https://www.google.com/maps/place/Multi-Service+Center/@47.3013801,-122.3179622,15z/data=!4m5!3m4!1s0x0:0xdbd6bc7b3fcd013e!8m2!3d47.3013801!4d-122.3179622"
                      target="_blank"
                    >
                      <Rectangle96></Rectangle96>
                    </a>
                    <Vector src="/img/vector-11@2x.svg" />
                    <Link to="/voucher-tool-v3-rap">
                      <CloseDetails>{closeDetails}</CloseDetails>
                    </Link>
                    <a
                      href="https://www.google.com/maps/place/Multi-Service+Center/@47.3013801,-122.3179622,15z/data=!4m5!3m4!1s0x0:0xdbd6bc7b3fcd013e!8m2!3d47.3013801!4d-122.3179622"
                      target="_blank"
                    >
                      <ViewOnMap>{viewOnMap}</ViewOnMap>
                    </a>
                    <IconCursor src="/img/vector-12@2x.svg" />
                  </OverlapGroup4>
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-next-steps">
                <TutorialButtons1 src="/img/tutorial-buttons-21@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons2 src="/img/tutorial-buttons-22@2x.svg" />
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

const Rectangle94 = styled.div`
  position: absolute;
  width: 945px;
  height: 206px;
  top: 176px;
  left: 33px;
  background-color: var(--midnight-blue);
  box-shadow: 0px 4px 4px #00000040;
`;

const MultiServiceCenterFederalWay = styled.div`
  ${RobotoMediumWhite29px}
  position: absolute;
  width: 522px;
  top: 196px;
  left: 52px;
  letter-spacing: 0;
`;

const Address1200South = styled.div`
  ${LibrebaskervilleNormalWhite25px}
  position: absolute;
  width: 809px;
  top: 246px;
  left: 59px;
  letter-spacing: 0;
  line-height: 42px;
`;

const Rectangle95 = styled.div`
  position: absolute;
  width: 186px;
  height: 41px;
  top: 190px;
  left: 779px;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const Rectangle96 = styled.div`
  position: absolute;
  width: 170px;
  height: 30px;
  top: 246px;
  left: 462px;
  background-color: var(--blue-zodiac);
  border-radius: 12px;
  cursor: pointer;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 210px;
  left: 790px;
`;

const CloseDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 141px;
  top: 196px;
  left: 818px;
  letter-spacing: 0;
  cursor: pointer;
`;

const ViewOnMap = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 163px;
  top: 241px;
  left: 469px;
  letter-spacing: 0;
  line-height: 42px;
  white-space: nowrap;
  cursor: pointer;
`;

const IconCursor = styled.img`
  position: absolute;
  width: 20px;
  height: 16px;
  top: 251px;
  left: 601px;
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

export default VoucherToolV3RAPMSC;
