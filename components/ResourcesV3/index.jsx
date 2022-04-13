import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded32 from "../ResourceAddedOrNotNotAdded32";
import ResourceAddedOrNotResourceAddedOrNo from "../ResourceAddedOrNotResourceAddedOrNo";
import "./ResourcesV3.css";

class ResourcesV3 extends React.Component {
  render() {
    const {
      findAHome,
      ifYouHaveReceived,
      housingSearchResources,
      resourceAddedOrNotNotAdded32Props,
      resourceAddedOrNotResourceAddedOrNoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3-1 screen">
          <div className="flex-row-6">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="find-a-home header-2">{findAHome}</div>
          <div className="if-you-have-received librebaskerville-normal-black-25px">{ifYouHaveReceived}</div>
          <div className="housing-search-resources roboto-medium-black-50px">{housingSearchResources}</div>
          <ResourceAddedOrNotNotAdded32
            affordableHousing={resourceAddedOrNotNotAdded32Props.affordableHousing}
            theLargestAndMost={resourceAddedOrNotNotAdded32Props.theLargestAndMost}
            linkToResource={resourceAddedOrNotNotAdded32Props.linkToResource}
          />
          <ResourceAddedOrNotResourceAddedOrNo
            name={resourceAddedOrNotResourceAddedOrNoProps.name}
            kchaHelpsRentersI={resourceAddedOrNotResourceAddedOrNoProps.kchaHelpsRentersI}
            linkToResource={resourceAddedOrNotResourceAddedOrNoProps.linkToResource}
          />
        </div>
      </div>
    );
  }
}

export default ResourcesV3;
