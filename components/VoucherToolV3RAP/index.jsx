import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import RegionalAccessPointsV2 from "../RegionalAccessPointsV2";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3RAP.css";

class VoucherToolV3RAP extends React.Component {
  render() {
    const { voucherTool, regionalAccessPointsV2Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-rap screen">
          <OverlapGroup6>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup6>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <Property1Audio />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <RegionalAccessPointsV2
                    regionalAccessPoin={regionalAccessPointsV2Props.regionalAccessPoin}
                    property1DefaultProps={regionalAccessPointsV2Props.property1DefaultProps}
                    property1Default81Props={regionalAccessPointsV2Props.property1Default81Props}
                    property1Default82Props={regionalAccessPointsV2Props.property1Default82Props}
                    property1Default83Props={regionalAccessPointsV2Props.property1Default83Props}
                    property1Default84Props={regionalAccessPointsV2Props.property1Default84Props}
                  />
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-next-steps">
                <TutorialButtons src="/img/tutorial-buttons@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-download-info">
              <TutorialButtons1 src="/img/tutorial-buttons-1@2x.svg" />
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

const FlexCol = styled.div`
  width: 1183px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 777px;
`;

const FlexRow1 = styled.div`
  height: 675px;
  position: relative;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 1182px;
`;

const FlexCol1 = styled.div`
  width: 1011px;
  position: relative;
  margin-left: 115px;
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

const TutorialButtons = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 25px;
  cursor: pointer;
`;

const TutorialButtons1 = styled.img`
  width: 125px;
  height: 77px;
  margin-left: 40px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3RAP;
