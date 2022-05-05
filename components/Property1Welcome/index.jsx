import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Border1pxSummerGreen, LibrebaskervilleNormalBlack30px } from "../../styledMixins";


class Property1Welcome extends React.Component {
  render() {
    const { welcomeThisToolI, clickNextToCont, tutorial1, skip } = this.props;

    return (
      <ToolQuestionScreen>
        <OverlapGroup1>
          <OverlapGroup>
            <WelcomeThisToolI>{welcomeThisToolI}</WelcomeThisToolI>
            <ClickNextToCont>{clickNextToCont}</ClickNextToCont>
            <Tutorial1 src={tutorial1} />
          </OverlapGroup>
          <Link to="/voucher-tool-v3-disclaimers">
            <Skip>{skip}</Skip>
          </Link>
        </OverlapGroup1>
      </ToolQuestionScreen>
    );
  }
}

const ToolQuestionScreen = styled.div`
  ${Border1pxSummerGreen}
  height: 564px;
  display: flex;
  padding: 0 10px;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
  border-radius: 5px;
`;

const OverlapGroup1 = styled.div`
  width: 985px;
  height: 525px;
  position: relative;
`;

const OverlapGroup = styled.div`
  ${LibrebaskervilleNormalBlack30px}
  position: absolute;
  width: 985px;
  height: 525px;
  top: 0;
  left: 0;
`;

const WelcomeThisToolI = styled.div`
  position: absolute;
  width: 942px;
  top: 0;
  left: 43px;
  letter-spacing: 0;
`;

const ClickNextToCont = styled.div`
  position: absolute;
  width: 516px;
  top: 314px;
  left: 469px;
  letter-spacing: 0;
`;

const Tutorial1 = styled.img`
  position: absolute;
  width: 431px;
  height: 385px;
  top: 140px;
  left: 0;
  object-fit: cover;
`;

const Skip = styled.div`
  position: absolute;
  width: 69px;
  top: 469px;
  left: 916px;
  font-family: var(--font-family-roboto);
  font-weight: 500;
  color: var(--black-2);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  cursor: pointer;
`;

export default Property1Welcome;
