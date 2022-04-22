import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Audio from "../Property1Audio";
import SelectionsDefault from "../SelectionsDefault";
import styled from "styled-components";
import { Header2 } from "../../styledMixins";
import "./VoucherToolV3EligibilityQuestions.css";

class VoucherToolV3EligibilityQuestions extends React.Component {
  render() {
    const { voucherTool, selectionsDefaultProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-eligibility-questions screen">
          <OverlapGroup4>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup4>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <Property1Audio />
                <FlexCol1>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <SelectionsDefault
                    spanText1={selectionsDefaultProps.spanText1}
                    spanText2={selectionsDefaultProps.spanText2}
                    homelessAtRiskOf={selectionsDefaultProps.homelessAtRiskOf}
                  />
                </FlexCol1>
              </FlexRow1>
              <Link to="/voucher-tool-v3-disclaimers">
                <TutorialButtons src="/img/tutorial-buttons-27@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-disqualifications">
              <TutorialButtons1 src="/img/tutorial-buttons-26@2x.svg" />
            </Link>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const OverlapGroup4 = styled.div`
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
  width: 1193px;
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
  min-width: 1192px;
`;

const FlexCol1 = styled.div`
  width: 1011px;
  position: relative;
  margin-left: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 675px;
`;

const VoucherTool = styled.div`
  ${Header2}
  width: 405px;
  min-height: 111px;
  margin-right: 22px;
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
  width: 99px;
  height: 77px;
  margin-left: 56px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3EligibilityQuestions;
