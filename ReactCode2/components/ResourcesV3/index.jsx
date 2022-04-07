import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded3 from "../ResourceAddedOrNotNotAdded3";
import ResourceAddedOrNotResourceAddedOrNo2 from "../ResourceAddedOrNotResourceAddedOrNo2";
import "./ResourcesV3.css";

class ResourcesV3 extends React.Component {
  render() {
    const {
      moreResources,
      ifYouHaveAlready,
      otherVoucherPrograms,
      housingChoiceVouchers,
      theHousingChoiceV,
      foodAndShelterResources,
      temporaryHousingResources,
      resourceAddedOrNotNotAdded31Props,
      resourceAddedOrNotResourceAddedOrNo2Props,
      resourceAddedOrNotNotAdded32Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3-1 screen">
          <div className="flex-row-17">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="more-resources-61 header-2">{moreResources}</div>
          <div className="if-you-have-already-1 librebaskerville-normal-black-25px">{ifYouHaveAlready}</div>
          <div className="other-voucher-programs-1 roboto-medium-black-50px">{otherVoucherPrograms}</div>
          <div className="overlap-group1-51">
            <div className="housing-choice-vouchers-7 roboto-medium-white-40px">{housingChoiceVouchers}</div>
            <div className="the-housing-choice-v-7 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
            <ResourceAddedOrNotNotAdded3
              housingChoiceVouchers={resourceAddedOrNotNotAdded31Props.housingChoiceVouchers}
              theHousingChoiceV={resourceAddedOrNotNotAdded31Props.theHousingChoiceV}
            />
          </div>
          <div className="food-and-shelter-resources-1 roboto-medium-black-50px">{foodAndShelterResources}</div>
          <ResourceAddedOrNotResourceAddedOrNo2
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo2Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo2Props.ourMissionIsToBu}
          />
          <div className="temporary-housing-resources-1 roboto-medium-black-50px">{temporaryHousingResources}</div>
          <ResourceAddedOrNotNotAdded3
            housingChoiceVouchers={resourceAddedOrNotNotAdded32Props.housingChoiceVouchers}
            theHousingChoiceV={resourceAddedOrNotNotAdded32Props.theHousingChoiceV}
            className={resourceAddedOrNotNotAdded32Props.className}
          />
        </div>
      </div>
    );
  }
}

export default ResourcesV3;
