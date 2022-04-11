import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import ResourceAddedOrNotNotAdded from "../ResourceAddedOrNotNotAdded";
import ResourceAddedOrNotResourceAddedOrNo from "../ResourceAddedOrNotResourceAddedOrNo";
import ResourceAddedOrNotNotAdded2 from "../ResourceAddedOrNotNotAdded2";
import "./Resources.css";

class Resources extends React.Component {
  render() {
    const {
      logIn,
      voucherTools,
      moreResources,
      ifYouHaveAlready,
      otherVoucherPrograms,
      housingChoiceVouchers,
      theHousingChoiceV,
      foodAndShelterResources,
      temporaryHousingResources,
      logoProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="resources screen">
          <div className="flex-row-15">
            <Link to="/log-in-page">
              <div className="log-in-1 roboto-normal-summer-green-35px">{logIn}</div>
            </Link>
            <Logo className={logoProps.className} />
            <div className="voucher-tools-1 roboto-normal-summer-green-35px">{voucherTools}</div>
          </div>
          <div className="more-resources-34 header-2">{moreResources}</div>
          <div className="if-you-have-already librebaskerville-normal-black-25px">{ifYouHaveAlready}</div>
          <div className="other-voucher-programs roboto-medium-black-50px">{otherVoucherPrograms}</div>
          <div className="overlap-group4-6">
            <div className="housing-choice-vouchers roboto-medium-white-40px">{housingChoiceVouchers}</div>
            <div className="the-housing-choice-v librebaskerville-normal-white-25px">{theHousingChoiceV}</div>
            <ResourceAddedOrNotNotAdded />
          </div>
          <div className="food-and-shelter-resources roboto-medium-black-50px">{foodAndShelterResources}</div>
          <ResourceAddedOrNotResourceAddedOrNo />
          <div className="temporary-housing-resources roboto-medium-black-50px">{temporaryHousingResources}</div>
          <ResourceAddedOrNotNotAdded2 />
        </div>
      </div>
    );
  }
}

export default Resources;
