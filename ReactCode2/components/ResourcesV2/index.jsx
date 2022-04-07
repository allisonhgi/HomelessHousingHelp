import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import ResourceAddedOrNotNotAdded from "../ResourceAddedOrNotNotAdded";
import ResourceAddedOrNotResourceAddedOrNo from "../ResourceAddedOrNotResourceAddedOrNo";
import ResourceAddedOrNotNotAdded2 from "../ResourceAddedOrNotNotAdded2";
import "./ResourcesV2.css";

class ResourcesV2 extends React.Component {
  render() {
    const {
      moreResources,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      otherVoucherPrograms,
      housingChoiceVouchers,
      theHousingChoiceV,
      foodAndShelterResources,
      temporaryHousingResources,
      resourceAddedOrNotResourceAddedOrNoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v2 screen">
          <div className="flex-row-38">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="more-resources-68 header-2">{moreResources}</div>
          <div className="if-you-have-already-3 librebaskerville-normal-white-25px-2">
            <span className="librebaskerville-normal-black-25px">{spanText1}</span>
            <span className="span1-5">{spanText2}</span>
            <span className="span2">{spanText3}</span>
            <span className="librebaskerville-normal-black-25px">{spanText4}</span>
          </div>
          <div className="other-voucher-programs-3 roboto-medium-black-50px">{otherVoucherPrograms}</div>
          <div className="overlap-group5-5">
            <div className="housing-choice-vouchers-11 roboto-medium-white-40px">{housingChoiceVouchers}</div>
            <div className="the-housing-choice-v-12 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
            <ResourceAddedOrNotNotAdded />
          </div>
          <div className="food-and-shelter-resources-3 roboto-medium-black-50px">{foodAndShelterResources}</div>
          <ResourceAddedOrNotResourceAddedOrNo className={resourceAddedOrNotResourceAddedOrNoProps.className} />
          <div className="temporary-housing-resources-3 roboto-medium-black-50px">{temporaryHousingResources}</div>
          <ResourceAddedOrNotNotAdded2 />
        </div>
      </div>
    );
  }
}

export default ResourcesV2;
