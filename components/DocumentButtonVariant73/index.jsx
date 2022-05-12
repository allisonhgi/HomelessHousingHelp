import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RobotoMediumWhite21px,
  LibrebaskervilleNormalWhite20px,
  RobotoMediumWhite30px,
  RobotoMediumWhite20px,
} from "../../styledMixins";


class DocumentButtonVariant73 extends React.Component {
  render() {
    const { ifYouKnowYourSoc, socialSecurityNumber, closeDetails, ssnHelp } = this.props;

    return (
        <DocumentButtonVariant7>
          <OverlapGroup3>
            <OverlapGroupContainer>
              <OverlapGroup>
                <a href="https://www.ssa.gov/ssnumber/" target="_blank">
                  <IfYouKnowYourSoc>{ifYouKnowYourSoc}</IfYouKnowYourSoc>
                </a>
                <SocialSecurityNumber>{socialSecurityNumber}</SocialSecurityNumber>
              </OverlapGroup>
              <OverlapGroup1>
                <Link to="/voucher-tool-v3-required-paperwork">
                  <Rectangle35></Rectangle35>
                </Link>
                <Link to="/voucher-tool-v3-required-paperwork">
                  <CloseDetails>{closeDetails}</CloseDetails>
                </Link>
                <Vector src="/img/vector-11@2x.svg" />
              </OverlapGroup1>
            </OverlapGroupContainer>
            <OverlapGroup2>
              <a href="https://www.ssa.gov/ssnumber/" target="_blank">
                <Rectangle351></Rectangle351>
              </a>
              <a href="https://www.ssa.gov/ssnumber/" target="_blank">
                <SSNHelp>{ssnHelp}</SSNHelp>
              </a>
              <a href="https://www.ssa.gov/ssnumber/" target="_blank">
                <Arrow1 src="/img/arrow-1-4@2x.svg" />
              </a>
            </OverlapGroup2>
          </OverlapGroup3>
        </DocumentButtonVariant7>
    );
  }
}

const DocumentButtonVariant7 = styled.div`
  position: absolute;
  height: 86px;
  top: 121px;
  left: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 916px;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  width: 926px;
  margin-bottom: -114px;
  display: flex;
  flex-direction: column;
  padding: 18px 0;
  align-items: flex-end;
  min-height: 201px;
  background-image: url(/img/rectangle-43-2@1x.svg);
  background-size: 100% 100%;
`;

const OverlapGroupContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: flex-start;
  min-width: 878px;
`;

const OverlapGroup = styled.div`
  width: 695px;
  height: 101px;
  position: relative;
`;

const IfYouKnowYourSoc = styled.div`
  ${LibrebaskervilleNormalWhite20px}
  position: absolute;
  width: 695px;
  top: 46px;
  left: 0;
  letter-spacing: 0;
  cursor: pointer;
`;

const SocialSecurityNumber = styled.div`
  ${RobotoMediumWhite30px}
  position: absolute;
  width: 323px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
  margin-top: 5px;
  border-radius: 12px;
`;

const Rectangle35 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 0;
  left: 0;
  background-color: var(--cornflower);
  border-radius: 12px;
  cursor: pointer;
`;

const CloseDetails = styled.div`
  ${RobotoMediumWhite21px}
  position: absolute;
  width: 133px;
  top: 8px;
  left: 40px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Vector = styled.img`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 20px;
  left: 17px;
`;

const OverlapGroup2 = styled.div`
  width: 146px;
  height: 33px;
  position: relative;
  margin-top: 17px;
  margin-right: 71px;
  border-radius: 10px;
`;

const Rectangle351 = styled.div`
  position: absolute;
  width: 146px;
  height: 33px;
  top: 0;
  left: 0;
  background-color: var(--blue-zodiac);
  border-radius: 10px;
  cursor: pointer;
`;

const SSNHelp = styled.div`
  ${RobotoMediumWhite20px}
  position: absolute;
  width: 120px;
  top: 5px;
  left: 18px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 22px;
  height: 11px;
  top: 11px;
  left: 110px;
  cursor: pointer;
`;

export default DocumentButtonVariant73;
