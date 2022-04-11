import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded5 from "../ResourceAddedOrNotNotAdded5";
import ResourceAddedOrNotResourceAddedOrNo3 from "../ResourceAddedOrNotResourceAddedOrNo3";
import "./ResourcesV32.css";

class ResourcesV32 extends React.Component {
  render() {
    const {
      findAHome,
      ifYouHaveReceived,
      housingSearchResources,
      resourceAddedOrNotNotAdded5Props,
      resourceAddedOrNotResourceAddedOrNo3Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3 screen">
          <div className="flex-row-91">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="find-a-home-1 header-2">{findAHome}</div>
          <div className="if-you-have-received librebaskerville-normal-black-25px">{ifYouHaveReceived}</div>
          <div className="housing-search-resources roboto-medium-black-50px">{housingSearchResources}</div>
          <ResourceAddedOrNotNotAdded5
            affordableHousing={resourceAddedOrNotNotAdded5Props.affordableHousing}
            theLargestAndMost={resourceAddedOrNotNotAdded5Props.theLargestAndMost}
            linkToResource={resourceAddedOrNotNotAdded5Props.linkToResource}
          />
          <ResourceAddedOrNotResourceAddedOrNo3
            name={resourceAddedOrNotResourceAddedOrNo3Props.name}
            kchaHelpsRentersI={resourceAddedOrNotResourceAddedOrNo3Props.kchaHelpsRentersI}
            linkToResource={resourceAddedOrNotResourceAddedOrNo3Props.linkToResource}
          />
        </div>
      </div>
    );
  }
}

export default ResourcesV32;
