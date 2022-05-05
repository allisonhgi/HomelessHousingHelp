import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import styled from "styled-components";
import { Border1pxSummerGreen, Header2, LibrebaskervilleNormalBlack30px } from "../../styledMixins";
import "./VoucherToolV3Disclaimers.css";

class VoucherToolV3Disclaimers extends React.Component {
  render() {
    const { voucherTool, spanText1, spanText2, spanText3, voucherApplying1 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-disclaimers screen">
          <OverlapGroup2>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup2>
          <FlexRow>
            <FlexCol>
              <FlexRow1>
                <TutorialButtons src="/img/tutorial-buttons-48@2x.svg" />
                <ToolContainer>
                  <VoucherTool>{voucherTool}</VoucherTool>
                  <ToolQuestionScreen>
                    <OverlapGroup>
                      <Obot>
                        <span className="librebaskerville-normal-black-30px">{spanText1}</span>
                        <span className="librebaskerville-bold-black-30px">{spanText2}</span>
                        <span className="librebaskerville-normal-black-30px">{spanText3}</span>
                      </Obot>
                      <VoucherApplying1 src={voucherApplying1} />
                    </OverlapGroup>
                  </ToolQuestionScreen>
                </ToolContainer>
              </FlexRow1>
              <Link to="/voucher-tool-v3-starting-screen">
                <TutorialButtons1 src="/img/tutorial-buttons-49@2x.svg" />
              </Link>
            </FlexCol>
            <Link to="/voucher-tool-v3-eligibility-questions">
              <TutorialButtons2 src="/img/tutorial-buttons-47@2x.svg" />
            </Link>
          </FlexRow>
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
  display: flex;
  align-items: flex-start;
  min-width: 1193px;
`;

const TutorialButtons = styled.img`
  width: 64px;
  height: 61px;
  margin-top: 135px;
`;

const ToolContainer = styled.div`
  width: 1011px;
  margin-left: 118px;
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

const ToolQuestionScreen = styled.div`
  ${Border1pxSummerGreen}
  height: 564px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
  border-radius: 5px;
`;

const OverlapGroup = styled.div`
  width: 1002px;
  height: 609px;
  position: relative;
  margin-bottom: -91px;
`;

const Obot = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  position: absolute;
  width: 892px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 50px;
`;

const VoucherApplying1 = styled.img`
  position: absolute;
  width: 524px;
  height: 524px;
  top: 85px;
  left: 478px;
  object-fit: cover;
`;

const TutorialButtons1 = styled.img`
  width: 99px;
  height: 77px;
  margin-top: 25px;
  cursor: pointer;
`;

const TutorialButtons2 = styled.img`
  width: 99px;
  height: 77px;
  margin-left: 56px;
  margin-bottom: 1px;
  cursor: pointer;
`;

export default VoucherToolV3Disclaimers;
