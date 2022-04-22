import React from "react";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded2 from "../ResourceAddedOrNotNotAdded2";
import ResourceAddedOrNotResourceAddedOrNo2 from "../ResourceAddedOrNotResourceAddedOrNo2";
import styled from "styled-components";
import { RobotoMediumBlack50px, Header2, LibrebaskervilleNormalBlack25px } from "../../styledMixins";
import "./ResourcesV32.css";

class ResourcesV32 extends React.Component {
  render() {
    const {
      findAHome,
      spanText1,
      spanText2,
      spanText3,
      housingSearchResources,
      resourceAddedOrNotNotAdded2Props,
      resourceAddedOrNotResourceAddedOrNo2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3 screen">
          <OverlapGroup3>
            <Logo />
            <HomePageLink />
            <MoreResources />
          </OverlapGroup3>
          <FindAHome>{findAHome}</FindAHome>
          <IfYouHaveReceived>
            <span className="librebaskerville-normal-black-25px">{spanText1}</span>
            <span className="librebaskerville-bold-black-25px">{spanText2}</span>
            <span className="librebaskerville-normal-black-25px">{spanText3}</span>
          </IfYouHaveReceived>
          <HousingSearchResources>{housingSearchResources}</HousingSearchResources>
          <ResourceAddedOrNotNotAdded2
            affordableHousing={resourceAddedOrNotNotAdded2Props.affordableHousing}
            theLargestAndMost={resourceAddedOrNotNotAdded2Props.theLargestAndMost}
            linkToResource={resourceAddedOrNotNotAdded2Props.linkToResource}
          />
          <ResourceAddedOrNotResourceAddedOrNo2
            name={resourceAddedOrNotResourceAddedOrNo2Props.name}
            kchaHelpsRentersI={resourceAddedOrNotResourceAddedOrNo2Props.kchaHelpsRentersI}
            linkToResource={resourceAddedOrNotResourceAddedOrNo2Props.linkToResource}
          />
        </div>
      </div>
    );
  }
}

const OverlapGroup3 = styled.div`
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

const FindAHome = styled.div`
  ${Header2}
  width: 343px;
  min-height: 75px;
  margin-top: 39px;
  margin-right: 1px;
  font-weight: 500;
  color: var(--black);
  text-align: center;
`;

const IfYouHaveReceived = styled.div`
  ${LibrebaskervilleNormalBlack25px}
  width: 1262px;
  min-height: 100px;
  margin-top: 36px;
  margin-right: 12px;
  letter-spacing: 0;
`;

const HousingSearchResources = styled.div`
  ${RobotoMediumBlack50px}
  width: 663px;
  min-height: 75px;
  align-self: flex-start;
  margin-top: 36px;
  margin-left: 83px;
  letter-spacing: 0;
`;

export default ResourcesV32;
