import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import ResourceAddedOrNotNotAdded from "../ResourceAddedOrNotNotAdded";
import ResourceAddedOrNotNotAdded2 from "../ResourceAddedOrNotNotAdded2";
import "./ResourcesLoggedIn.css";

class ResourcesLoggedIn extends React.Component {
  render() {
    const {
      myAccount,
      voucherTools,
      moreResources,
      ifYouHaveAlready,
      otherVoucherPrograms,
      housingChoiceVouchers,
      theHousingChoiceV1,
      foodAndShelterResources,
      universityDistrictFoodBank,
      theHousingChoiceV2,
      addToMyResources,
      temporaryHousingResources,
      logoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources-logged-in screen">
          <div className="flex-row-31">
            <Link to="/account-page">
              <div className="my-account-28 roboto-normal-summer-green-35px">{myAccount}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="voucher-tools-5 roboto-normal-summer-green-35px">{voucherTools}</div>
          </div>
          <div className="more-resources-48 header-2">{moreResources}</div>
          <div className="if-you-have-already-2 librebaskerville-normal-black-25px">{ifYouHaveAlready}</div>
          <div className="other-voucher-programs-2 roboto-medium-black-50px">{otherVoucherPrograms}</div>
          <div className="overlap-group4-12">
            <div className="housing-choice-vouchers-10 roboto-medium-white-40px">{housingChoiceVouchers}</div>
            <div className="the-housing-choice-v-10 librebaskerville-normal-white-25px">{theHousingChoiceV1}</div>
            <ResourceAddedOrNotNotAdded />
          </div>
          <div className="food-and-shelter-resources-2 roboto-medium-black-50px">{foodAndShelterResources}</div>
          <div className="resource-section-11">
            <div className="overlap-group1-53">
              <div className="university-district-food-bank-3 roboto-medium-white-40px">
                {universityDistrictFoodBank}
              </div>
              <div className="the-housing-choice-v-11 librebaskerville-normal-white-25px">{theHousingChoiceV2}</div>
              <div className="overlap-group-75">
                <div className="add-to-my-resources-8 roboto-medium-hippie-blue-25px">{addToMyResources}</div>
              </div>
            </div>
          </div>
          <div className="temporary-housing-resources-2 roboto-medium-black-50px">{temporaryHousingResources}</div>
          <ResourceAddedOrNotNotAdded2 />
        </div>
      </div>
    );
  }
}

export default ResourcesLoggedIn;
