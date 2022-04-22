import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite30px, RobotoMediumWhite20px } from "../../styledMixins";


class DocumentButtonVariant73 extends React.Component {
  render() {
    const { proofOfIncome, spanText1, spanText2, spanText3, incomeHelp, closeDetails } = this.props;

    return (
      <DocumentButtonVariant7>
        <OverlapGroupContainer>
          <OverlapGroup>
            <ProofOfIncome>{proofOfIncome}</ProofOfIncome>
            <TheFollowingArticl>
              <span className="librebaskerville-normal-white-20px">{spanText1}</span>
              <Span117>{spanText2}</Span117>
              <span className="librebaskerville-normal-white-20px">{spanText3}</span>
            </TheFollowingArticl>
            <Rectangle44></Rectangle44>
            <a
              href="https://doh.wa.gov/licenses-permits-and-certificates/vital-records/ordering-birth-record"
              target="_blank"
            >
              <IncomeHelp>{incomeHelp}</IncomeHelp>
            </a>
            <a
              href="https://www.seattlehousing.org/housing/housing-choice-vouchers/eligibility/income-level-housing-choice-voucher-program"
              target="_blank"
            >
              <Arrow1 src="/img/arrow-1-1@2x.svg" />
            </a>
          </OverlapGroup>
          <OverlapGroup1>
            <Link to="/voucher-tool-v3-required-paperwork">
              <Rectangle35></Rectangle35>
            </Link>
            <Link to="/voucher-tool-v3-required-paperwork">
              <CloseDetails>{closeDetails}</CloseDetails>
            </Link>
            <Vector src="/img/vector-39@2x.svg" />
          </OverlapGroup1>
        </OverlapGroupContainer>
      </DocumentButtonVariant7>
    );
  }
}

const DocumentButtonVariant7 = styled.div`
  position: absolute;
  height: 86px;
  top: 316px;
  left: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 916px;
`;

const OverlapGroupContainer = styled.div`
  width: 926px;
  height: 263px;
  position: relative;
  margin-bottom: -176px;
  background-image: url(/img/rectangle-43-2@1x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 849px;
  height: 228px;
  top: 19px;
  left: 24px;
`;

const ProofOfIncome = styled.div`
  ${RobotoMediumWhite30px}
  position: absolute;
  width: 323px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const TheFollowingArticl = styled.div`
  position: absolute;
  width: 695px;
  top: 46px;
  left: 0;
  font-family: var(--font-family-libre_baskerville);
  font-weight: 400;
  color: transparent;
  font-size: 20px;
  letter-spacing: 0;
`;

const Span117 = styled.span`
  color: var(--cornflower);
  text-decoration: underline;
`;

const Rectangle44 = styled.div`
  position: absolute;
  width: 174px;
  height: 33px;
  top: 192px;
  left: 675px;
  background-color: var(--blue-zodiac);
  border-radius: 10px;
`;

const IncomeHelp = styled.div`
  ${RobotoMediumWhite20px}
  position: absolute;
  width: 120px;
  top: 198px;
  left: 693px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 22px;
  height: 11px;
  top: 203px;
  left: 812px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 183px;
  height: 42px;
  top: 23px;
  left: 719px;
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
  top: 9px;
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

export default DocumentButtonVariant73;
