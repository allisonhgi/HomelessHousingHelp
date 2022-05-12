import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import Property1Variant3 from "../Property1Variant3";
import Property1Default4 from "../Property1Default4";
import DocumentButtonVariant7 from "../DocumentButtonVariant7";
import styled from "styled-components";
import {
  Header2,
  Border1pxBlack2,
  LibrebaskervilleNormalBlack27px,
  LibrebaskervilleNormalWhite195px,
} from "../../styledMixins";
import "./VoucherToolV3RequiredPaperworkPOI.css";

class VoucherToolV3RequiredPaperworkPOI extends React.Component {
  render() {
    const {
      voucherTool,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      property1Default4Props,
      documentButtonVariant7Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="voucher-tool-v3-required-paperwork-poi screen">
          <OverlapGroup6>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup6>
          <OverlapGroup7>
            <VoucherTool>{voucherTool}</VoucherTool>
            <Line1 src="/img/line-1@1x.svg" />
          </OverlapGroup7>
          <OverlapGroup5>
            <TextInfo>
              <DocumentContainer>
                <NoDocumentsAreNee>
                  <span className="librebaskerville-normal-black-27px">{spanText1}</span>
                  <span className="librebaskerville-bold-black-27px">{spanText2}</span>
                  <span className="librebaskerville-normal-black-27px">{spanText3}</span>
                  <span className="librebaskerville-normal-black-30px">{spanText4}</span>
                </NoDocumentsAreNee>
                <Property1Variant3 />
                <Property1Default4 className={property1Default4Props.className} />
                <DocumentButtonVariant7
                  proofOfIncome={documentButtonVariant7Props.proofOfIncome}
                  closeDetails={documentButtonVariant7Props.closeDetails}
                  incomeHelp={documentButtonVariant7Props.incomeHelp}
                />
              </DocumentContainer>
            </TextInfo>
            <a
              href="https://bungalow.com/articles/10-ways-tenants-can-show-proof-of-income-and-why-its-important"
              target="_blank"
            >
              <TheFollowingArticl>
                {/*<span className="librebaskerville-normal-white-19-5px">{spanText5}</span>*/}
                <Span112>{spanText6}</Span112>
                <span className="librebaskerville-normal-white-19-5px">{spanText7}</span>
                <Span33>{spanText8}</Span33>
                <span className="librebaskerville-normal-white-19-5px">{spanText9}</span>
              </TheFollowingArticl>
            </a>
          </OverlapGroup5>
          <TutorialButtonsContainer>
            <Link to="/voucher-tool-v3-disqualifications" className="align-self-flex-end">
              <TutorialButtons src="/img/tutorial-buttons-34@2x.svg" />
            </Link>
            <Link to="/voucher-tool-v3-next-steps">
              <TutorialButtons1 src="/img/tutorial-buttons-32@2x.svg" />
            </Link>
          </TutorialButtonsContainer>
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

const OverlapGroup7 = styled.div`
  width: 1440px;
  height: 111px;
  position: relative;
  align-self: flex-end;
  margin-top: 62px;
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

const OverlapGroup5 = styled.div`
  width: 1011px;
  height: 584px;
  position: relative;
  margin-top: 1px;
  margin-left: 1px;
`;

const TextInfo = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  height: 564px;
  top: 0;
  left: 0;
  display: flex;
  padding: 20px 34px;
  align-items: flex-end;
  min-width: 1011px;
  background-color: var(--white);
`;

const DocumentContainer = styled.div`
  width: 930px;
  height: 514px;
  position: relative;
`;

const NoDocumentsAreNee = styled.div`
  ${LibrebaskervilleNormalBlack27px}
  position: absolute;
  width: 911px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const TheFollowingArticl = styled.div`
  position: absolute;
  width: 661px;
  top: 410px;
  left: 67px;
  font-family: var(--font-family-libre_baskerville);
  font-weight: 400;
  color: transparent;
  font-size: 19.5px;
  letter-spacing: 0;
  line-height: 19.5px;
  cursor: pointer;
`;

const Span112 = styled.span`
  color: var(--cornflower);
  text-decoration: underline;
`;

const Span33 = styled.span`
  ${LibrebaskervilleNormalWhite195px}
  line-height: 28px;
`;

const TutorialButtonsContainer = styled.div`
  height: 78px;
  margin-top: 4px;
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

export default VoucherToolV3RequiredPaperworkPOI;
