import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RobotoMediumWhite21px,
  RobotoMediumWhite30px,
  LibrebaskervilleNormalWhite20px,
  RobotoMediumWhite20px,
} from "../../styledMixins";


class DocumentButtonVariant72 extends React.Component {
  render() {
    const { proofOfDateOfBirth, aBirthCertificate, closeDetails, dobHelp } = this.props;

    return (
      <DocumentButtonVariant7>
        <OverlapGroup3>
          <OverlapGroupContainer>
            <BirthContainer>
              <ProofOfDateOfBirth>{proofOfDateOfBirth}</ProofOfDateOfBirth>
              <ABirthCertificate>{aBirthCertificate}</ABirthCertificate>
            </BirthContainer>
            <OverlapGroup2>
              <Vector src="/img/vector-11@2x.svg" />
              <Link to="/voucher-tool-v3-required-paperwork">
                <CloseDetails>{closeDetails}</CloseDetails>
              </Link>
            </OverlapGroup2>
          </OverlapGroupContainer>
          <OverlapGroup>
            <a
              href="https://doh.wa.gov/licenses-permits-and-certificates/vital-records/ordering-birth-record"
              target="_blank"
            >
              <DOBHelp>{dobHelp}</DOBHelp>
            </a>
            <a href="https://doh.wa.gov/licenses-permits-and-certificates/vital-records/ordering-birth-record" target="_blank">
              <Arrow1 src="/img/arrow-1-4@2x.svg" />
            </a>
          </OverlapGroup>
        </OverlapGroup3>
      </DocumentButtonVariant7>
    );
  }
}

const DocumentButtonVariant7 = styled.div`
  position: absolute;
  height: 86px;
  top: 219px;
  left: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 916px;
`;

const OverlapGroup3 = styled.div`
  width: 926px;
  margin-bottom: -114px;
  display: flex;
  flex-direction: column;
  padding: 18px 0;
  align-items: flex-end;
  min-height: 201px;
  background-image: url(/img/rectangle-43-1@1x.svg);
  background-size: 100% 100%;
`;

const OverlapGroupContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: flex-start;
  min-width: 878px;
`;

const BirthContainer = styled.div`
  width: 695px;
  height: 101px;
  position: relative;
`;

const ProofOfDateOfBirth = styled.div`
  ${RobotoMediumWhite30px}
  position: absolute;
  width: 323px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 45px;
  white-space: nowrap;
`;

const ABirthCertificate = styled.div`
  ${LibrebaskervilleNormalWhite20px}
  position: absolute;
  width: 695px;
  top: 46px;
  left: 0;
  letter-spacing: 0;
  line-height: 27px;
`;

const OverlapGroup2 = styled.div`
  height: 42px;
  margin-top: 5px;
  display: flex;
  padding: 8px 10px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 183px;
  background-color: var(--cornflower);
  border-radius: 12px;
`;

const Vector = styled.img`
  width: 16px;
  height: 2px;
  align-self: center;
`;

const CloseDetails = styled.div`
  ${RobotoMediumWhite21px}
  width: 133px;
  min-height: 23px;
  margin-left: 7px;
  letter-spacing: 0;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 146px;
  height: 33px;
  position: relative;
  margin-top: 22px;
  margin-right: 70px;
  background-color: var(--blue-zodiac);
  border-radius: 10px;
`;

const DOBHelp = styled.div`
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

export default DocumentButtonVariant72;
