import React from "react";
import { Link } from "react-router-dom";
import "./UserMenuPopUpLoggedIn2.css";

class UserMenuPopUpLoggedIn2 extends React.Component {
  render() {
    const {
      line6,
      name,
      viewYourAccountPage,
      quickLinks,
      mySavedResources,
      view1,
      vector2,
      savedVoucherToolData,
      view2,
      vector3,
      findAHomeTool,
      view3,
      voucherApplicationTool,
      view4,
      vector4,
    } = this.props;

    return (
      <div className="user-menu-pop-up-logged-in-1">
        <div className="overlap-group-78">
          <img className="line-6" src={line6} />
          <div className="flex-row-40">
            <div className="icround-account-circle-21">
              <img className="vector-123" src="" />
            </div>
            <div className="flex-col-23">
              <Link to="/account-page-alt-v2">
                <div className="name-2">{name}</div>
              </Link>
              <Link to="/account-page-alt-v2">
                <div className="view-your-account-page">{viewYourAccountPage}</div>
              </Link>
            </div>
          </div>
          <div className="quick-links">{quickLinks}</div>
          <div className="overlap-group2-32">
            <Link to="/account-page-alt-v2-my-resources-click">
              <div className="rectangle-33"></div>
            </Link>
            <div className="my-saved-resources roboto-normal-white-25px">{mySavedResources}</div>
            <Link to="/account-page-alt-v2-my-resources-click">
              <div className="view-3 roboto-normal-white-20px">{view1}</div>
            </Link>
            <div className="evaarrow-ios-forward-outline-1">
              <img className="vector-122" src={vector2} />
            </div>
          </div>
          <div className="overlap-group3-17">
            <div className="x-tool roboto-normal-white-25px">{savedVoucherToolData}</div>
            <div className="overlap-group-77">
              <Link to="/account-page-alt-v2-1">
                <div className="view-2 roboto-normal-white-20px">{view2}</div>
              </Link>
              <Link to="/account-page-alt-v2-1">
                <div className="evaarrow-ios-forward-outline">
                  <img className="vector-122" src={vector3} />
                </div>
              </Link>
            </div>
          </div>
          <div className="overlap-group1-54">
            <div className="x-tool roboto-normal-white-25px">{findAHomeTool}</div>
            <Link to="/housing-tool" className="align-self-flex-center">
              <div className="view-4 roboto-normal-white-20px">{view3}</div>
            </Link>
          </div>
          <div className="overlap-group4-12">
            <div className="x-tool roboto-normal-white-25px">{voucherApplicationTool}</div>
            <div className="overlap-group-77">
              <Link to="/voucher-tool-v2-starting-screen">
                <div className="view-2 roboto-normal-white-20px">{view4}</div>
              </Link>
              <Link to="/voucher-tool-v2-starting-screen">
                <div className="evaarrow-ios-forward-outline">
                  <img className="vector-122" src={vector4} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserMenuPopUpLoggedIn2;
