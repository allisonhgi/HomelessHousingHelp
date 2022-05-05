import React from "react";
import Logo from "../Logo";
import HomePageLink from "../HomePageLink";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded from "../ResourceAddedOrNotNotAdded";
import ResourceAddedOrNotResourceAddedOrNo from "../ResourceAddedOrNotResourceAddedOrNo";
import styled from "styled-components";
import { RobotoMediumBlack50px, Header2, LibrebaskervilleNormalBlack25px } from "../../styledMixins";
import "./FindAHome.css";

class FindAHome extends React.Component {
  render() {
    const {
      findAHome,
      spanText1,
      spanText2,
      spanText3,
      housingSearchResources,
      logoProps,
      homePageLinkProps,
      moreResourcesProps,
      resourceAddedOrNotNotAddedProps,
      resourceAddedOrNotResourceAddedOrNo1Props,
      resourceAddedOrNotResourceAddedOrNo2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="find-a-home screen">
          <OverlapGroup4>
            <Logo className={logoProps.className} />
            <HomePageLink className={homePageLinkProps.className} />
            <MoreResources className={moreResourcesProps.className} />
          </OverlapGroup4>
          <FindAHome1>{findAHome}</FindAHome1>
          <IfYouHaveReceived>
            <span className="librebaskerville-normal-black-25px">{spanText1}</span>
            <span className="librebaskerville-bold-black-25px">{spanText2}</span>
            <span className="librebaskerville-normal-black-25px">{spanText3}</span>
          </IfYouHaveReceived>
          <HousingSearchResources>{housingSearchResources}</HousingSearchResources>
          <ResourceAddedOrNotNotAdded
            affordableHousing={resourceAddedOrNotNotAddedProps.affordableHousing}
            theLargestAndMost={resourceAddedOrNotNotAddedProps.theLargestAndMost}
            linkToResource={resourceAddedOrNotNotAddedProps.linkToResource}
          />
          <ResourceAddedOrNotResourceAddedOrNo
            name={resourceAddedOrNotResourceAddedOrNo1Props.name}
            kchaHelpsRentersI={resourceAddedOrNotResourceAddedOrNo1Props.kchaHelpsRentersI}
          />
          <ResourceAddedOrNotResourceAddedOrNo
            name={resourceAddedOrNotResourceAddedOrNo2Props.name}
            kchaHelpsRentersI={resourceAddedOrNotResourceAddedOrNo2Props.kchaHelpsRentersI}
            className={resourceAddedOrNotResourceAddedOrNo2Props.className}
          />
        </div>
      </div>
    );
  }
}

const OverlapGroup4 = styled.div`
  height: 155px;
  position: relative;
  display: flex;
  padding: 38.8px 85px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #00000040;
`;

const FindAHome1 = styled.div`
  ${Header2}
  width: 343px;
  min-height: 75px;
  margin-top: 36px;
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

export default FindAHome;
