import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded2 from "../ResourceAddedOrNotNotAdded2";
import ResourceAddedOrNotResourceAddedOrNo2 from "../ResourceAddedOrNotResourceAddedOrNo2";
import ResourceAddedOrNotNotAdded3 from "../ResourceAddedOrNotNotAdded3";
import "./ResourcesV32.css";

class ResourcesV32 extends React.Component {
  render() {
    const {
      moreResources,
      spanText1,
      spanText2,
      otherVoucherPrograms,
      housingChoiceVouchers,
      theHousingChoiceV,
      foodAndShelterResources,
      temporaryHousingResources,
      linkToResource,
      moreResourcesProps,
      resourceAddedOrNotNotAdded2Props,
      resourceAddedOrNotResourceAddedOrNo2Props,
      resourceAddedOrNotNotAdded3Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3 screen">
          <div className="flex-row-7">
            <HomePageLink />
            <Logo />
            <MoreResources className={moreResourcesProps.className} />
          </div>
          <div className="more-resources-6 header-2">{moreResources}</div>
          <div className="if-you-have-already librebaskerville-normal-black-25px">
            <span className="librebaskerville-normal-black-25px">{spanText1}</span>
            <span className="span1-2">{spanText2}</span>
          </div>
          <div className="other-voucher-programs roboto-medium-black-50px">{otherVoucherPrograms}</div>
          <div className="overlap-group4-3">
            <div className="housing-choice-vouchers roboto-medium-white-40px">{housingChoiceVouchers}</div>
            <div className="the-housing-choice-v librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
            <ResourceAddedOrNotNotAdded2
              housingChoiceVouchers={resourceAddedOrNotNotAdded2Props.housingChoiceVouchers}
              theHousingChoiceV={resourceAddedOrNotNotAdded2Props.theHousingChoiceV}
              linkToResource={resourceAddedOrNotNotAdded2Props.linkToResource}
            />
          </div>
          <div className="food-and-shelter-resources roboto-medium-black-50px">{foodAndShelterResources}</div>
          <ResourceAddedOrNotResourceAddedOrNo2
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo2Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo2Props.ourMissionIsToBu}
            linkToResource={resourceAddedOrNotResourceAddedOrNo2Props.linkToResource}
          />
          <div className="temporary-housing-resources roboto-medium-black-50px">{temporaryHousingResources}</div>
          <div className="overlap-group5-4">
            <ResourceAddedOrNotNotAdded3
              housingChoiceVouchers={resourceAddedOrNotNotAdded3Props.housingChoiceVouchers}
              theHousingChoiceV={resourceAddedOrNotNotAdded3Props.theHousingChoiceV}
            />
            <a href="https://lihi.org/rosies-village/" target="_blank">
              <div className="rectangle-27-2"></div>
            </a>
            <div className="link-to-resource-2 roboto-medium-midnight-blue-25px">{linkToResource}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcesV32;
