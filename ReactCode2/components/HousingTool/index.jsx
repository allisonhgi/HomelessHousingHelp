import React from "react";
import { Link } from "react-router-dom";
import HomePageLink from "../HomePageLink";
import Logo from "../Logo";
import MenuBar from "../MenuBar";
import Property1Default2 from "../Property1Default2";
import Property1Default3 from "../Property1Default3";
import Property1Variant2 from "../Property1Variant2";
import Property1Variant3 from "../Property1Variant3";
import "./HousingTool.css";

class HousingTool extends React.Component {
  render() {
    const {
      enterANeighborhood,
      findAHome,
      useYourHousingVou,
      dontHaveAHousingVoucherYet,
      filter,
      goToOurVoucherApplicationTool,
      property1Default2Props,
      property1Default3Props,
      property1Variant2Props,
      property1Variant3Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="housing-tool screen">
          <div className="flex-row-12">
            <HomePageLink />
            <Logo />
            <MenuBar />
          </div>
          <div className="overlap-group4-5">
            <div className="overlap-group3-4">
              <img className="polygon-2-2" src="/img/polygon-2-1@1x.svg" />
              <div className="enter-a-neighborhood">{enterANeighborhood}</div>
              <Property1Default2
                trySeattle={property1Default2Props.trySeattle}
                search={property1Default2Props.search}
              />
            </div>
            <div className="find-a-home header-1big-title">{findAHome}</div>
            <div className="use-your-housing-vou librebaskerville-normal-black-38px">{useYourHousingVou}</div>
            <div className="dont-have-a-housing-voucher-yet librebaskerville-normal-black-21px">
              {dontHaveAHousingVoucherYet}
            </div>
            <div className="filter librebaskerville-normal-black-28px">{filter}</div>
            <Property1Default3 homeType={property1Default3Props.homeType} />
            <Link to="/voucher-tool-v2-starting-screen">
              <div className="tutorial-buttons-71">
                <div className="go-to-our-voucher-application-tool roboto-medium-white-19px">
                  {goToOurVoucherApplicationTool}
                </div>
                <img className="arrow-1-4" src="/img/arrow-1-3@2x.svg" />
              </div>
            </Link>
            <Property1Variant2
              bedrooms={property1Variant2Props.bedrooms}
              evaarrowLeftFillProps={property1Variant2Props.evaarrowLeftFillProps}
            />
            <Property1Variant3 moreFilters={property1Variant3Props.moreFilters} />
          </div>
        </div>
      </div>
    );
  }
}

export default HousingTool;
