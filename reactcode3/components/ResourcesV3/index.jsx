import React from "react";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MoreResources from "../MoreResources";
import ResourceAddedOrNotNotAdded3 from "../ResourceAddedOrNotNotAdded3";
import ResourceAddedOrNotResourceAddedOrNo2 from "../ResourceAddedOrNotResourceAddedOrNo2";
import ResourceAddedOrNotNotAdded4 from "../ResourceAddedOrNotNotAdded4";
import "./ResourcesV3.css";

class ResourcesV3 extends React.Component {
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
      resourceAddedOrNotNotAdded3Props,
      resourceAddedOrNotResourceAddedOrNo2Props,
      resourceAddedOrNotNotAdded4Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-v3-1 screen">
          <div className="flex-row-21">
            <HomePageLink />
            <Logo />
            <MoreResources />
          </div>
          <div className="more-resources-38 header-2">{moreResources}</div>
          <div className="if-you-have-already-1 librebaskerville-normal-black-25px">
            <span className="librebaskerville-normal-black-25px">{spanText1}</span>
            <span className="span1-1">{spanText2}</span>
          </div>
          <div className="other-voucher-programs-1 roboto-medium-black-50px">{otherVoucherPrograms}</div>
          <div className="overlap-group5-4">
            <div className="housing-choice-vouchers-7 roboto-medium-white-40px">{housingChoiceVouchers}</div>
            <div className="the-housing-choice-v-7 librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
            <ResourceAddedOrNotNotAdded3
              housingChoiceVouchers={resourceAddedOrNotNotAdded3Props.housingChoiceVouchers}
              theHousingChoiceV={resourceAddedOrNotNotAdded3Props.theHousingChoiceV}
              linkToResource={resourceAddedOrNotNotAdded3Props.linkToResource}
            />
          </div>
          <div className="food-and-shelter-resources-1 roboto-medium-black-50px">{foodAndShelterResources}</div>
          <ResourceAddedOrNotResourceAddedOrNo2
            universityDistrictFoodBank={resourceAddedOrNotResourceAddedOrNo2Props.universityDistrictFoodBank}
            ourMissionIsToBu={resourceAddedOrNotResourceAddedOrNo2Props.ourMissionIsToBu}
            linkToResource={resourceAddedOrNotResourceAddedOrNo2Props.linkToResource}
          />
          <div className="temporary-housing-resources-1 roboto-medium-black-50px">{temporaryHousingResources}</div>
          <div className="overlap-group4-9">
            <ResourceAddedOrNotNotAdded4
              housingChoiceVouchers={resourceAddedOrNotNotAdded4Props.housingChoiceVouchers}
              theHousingChoiceV={resourceAddedOrNotNotAdded4Props.theHousingChoiceV}
            />
            <a href="https://lihi.org/rosies-village/" target="_blank">
              <div className="rectangle-27"></div>
            </a>
            <div className="link-to-resource roboto-medium-midnight-blue-25px">{linkToResource}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcesV3;
