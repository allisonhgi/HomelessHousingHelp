import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import Property1Default42 from "../Property1Default42";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3DisqualificationsCheck.css";

class VoucherToolV3DisqualificationsCheck extends React.Component {
  render() {
    const { voucherTool, line1, property1AudioProps, property1Default42Props } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disqualifications-checked screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <OverlapGroup3>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src={line1} />
          </OverlapGroup3>
          <FlexRow>
            <Property1Audio className={property1AudioProps.className} />
            <OverlapGroup4>
              <Property1Default42
                checkIfAnyOfThe={property1Default42Props.checkIfAnyOfThe}
                youreARegistered={property1Default42Props.youreARegistered}
              />
              <IconCheckMark src="/img/vector-75@2x.svg" />
            </OverlapGroup4>
          </FlexRow>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-29@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-required-paperwork">
              <TutorialButtons1 src="/img/tutorial-buttons-28@2x.svg" />
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

const OverlapGroup3 = styled.div`
  width: 1440px;
  height: 111px;
  position: relative;
  align-self: flex-end;
  margin-top: 63px;
  margin-right: -5px;
`;

const VoucherTool = styled.div`
  ${Header2}
  position: absolute;
  width: 405px;
  top: 0;
  left: 512px;
  font-weight: 500;
  color: var(--black);
`;

const Line1 = styled.img`
  position: absolute;
  width: 1440px;
  height: 1px;
  top: 82px;
  left: 0;
`;

const FlexRow = styled.div`
  position: relative;
  margin-left: 44px;
  display: flex;
  align-items: flex-start;
  min-width: 1182px;
`;

const OverlapGroup4 = styled.div`
  width: 1011px;
  height: 564px;
  position: relative;
  margin-left: 115px;
`;

const IconCheckMark = styled.img`
  position: absolute;
  width: 24px;
  height: 18px;
  top: 486px;
  left: 73px;
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  align-self: center;
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
  width: 99px;
  height: 77px;
  margin-left: 1150px;
  cursor: pointer;
`;

export default VoucherToolV3DisqualificationsCheck;
