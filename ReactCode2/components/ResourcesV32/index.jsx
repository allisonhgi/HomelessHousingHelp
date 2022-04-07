import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded3 from "../ResourceAddedOrNotNotAdded3";
import ResourceAddedOrNotResourceAddedOrNo2 from "../ResourceAddedOrNotResourceAddedOrNo2";
import "./ResourcesV32.css";

class ResourcesV32 extends React.Component {
  render() {
    const {
      findAHome,
      ifYouHaveReceived,
      housingSearchResources,
      housingChoiceVouchers,
      theHousingChoiceV,
      test1,
      test2,
      resourceAddedOrNotNotAdded31Props,
      resourceAddedOrNotResourceAddedOrNo2Props,
      resourceAddedOrNotNotAdded32Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3 screen">
          <div className="flex-row-93">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="find-a-home-1 header-2">{findAHome}</div>
          <div className="if-you-have-received librebaskerville-normal-black-25px">{ifYouHaveReceived}</div>
          <div className="housing-search-resources roboto-medium-black-50px">{housingSearchResources}</div>
          <div className="overlap-group1-59">
            <div className="housing-choice-vouchers-13 roboto-medium-white-40px">{housingChoiceVouchers}</div>
            <div className="the-housing-choice-v-14 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
            <ResourceAddedOrNotNotAdded3
              housingChoiceVouchers={resourceAddedOrNotNotAdded31Props.housingChoiceVouchers}
              theHousingChoiceV={resourceAddedOrNotNotAdded31Props.theHousingChoiceV}
              className={resourceAddedOrNotNotAdded31Props.className}
            />
          </div>
          <div className="test roboto-medium-black-50px">{test1}</div>
          <ResourceAddedOrNotResourceAddedOrNo2
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo2Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo2Props.ourMissionIsToBu}
          />
          <div className="test-1 roboto-medium-black-50px">{test2}</div>
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

export default ResourcesV32;
