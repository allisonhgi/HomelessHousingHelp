import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RobotoMediumWhite21px, RobotoMediumWhite30px, RobotoMediumWhite20px } from "../../styledMixins";


class DocumentButtonVariant7 extends React.Component {
  render() {
    const { proofOfIncome, closeDetails, incomeHelp } = this.props;

    return (
      <Link to="/voucher-tool-v3-required-paperwork">
        <DocumentButtonVariant71>
          <OverlapGroup2>
            <FlexRow>
              <ProofOfIncome>{proofOfIncome}</ProofOfIncome>
              <OverlapGroup1>
                <Link to="/voucher-tool-v3-required-paperwork">
                  <Rectangle35></Rectangle35>
                </Link>
                <Link to="/voucher-tool-v3-required-paperwork">
                  <CloseDetails>{closeDetails}</CloseDetails>
                </Link>
                <Vector src="/img/vector-11@2x.svg" />
              </OverlapGroup1>
            </FlexRow>
            <OverlapGroup>
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
                <Arrow1 src="/img/arrow-1-4@2x.svg" />
              </a>
            </OverlapGroup>
          </OverlapGroup2>
        </DocumentButtonVariant71>
      </Link>
    );
  }
}

const DocumentButtonVariant71 = styled.div`
  position: absolute;
  height: 86px;
  top: 316px;
  left: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 916px;
  cursor: pointer;
`;

const OverlapGroup2 = styled.div`
  width: 926px;
  margin-bottom: -176px;
  display: flex;
  flex-direction: column;
  padding: 19px 0;
  align-items: flex-end;
  min-height: 263px;
  background-image: url(/img/rectangle-43@1x.svg);
  background-size: 100% 100%;
`;

const FlexRow = styled.div`
  height: 51px;
  align-self: center;
  display: flex;
  align-items: center;
  min-width: 878px;
`;

const ProofOfIncome = styled.div`
  ${RobotoMediumWhite30px}
  width: 323px;
  min-height: 51px;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 183px;
  height: 42px;
  position: relative;
  margin-left: 372px;
  margin-bottom: 1px;
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

const OverlapGroup = styled.div`
  width: 174px;
  height: 33px;
  position: relative;
  margin-top: 141px;
  margin-right: 53px;
  background-color: var(--blue-zodiac);
  border-radius: 10px;
`;

const IncomeHelp = styled.div`
  ${RobotoMediumWhite20px}
  position: absolute;
  width: 120px;
  top: 6px;
  left: 18px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  position: absolute;
  width: 22px;
  height: 11px;
  top: 11px;
  left: 137px;
  cursor: pointer;
`;

export default DocumentButtonVariant7;
