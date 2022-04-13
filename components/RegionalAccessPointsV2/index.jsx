import React from "react";
import Property1Default2 from "../Property1Default2";
import "./RegionalAccessPointsV2.css";

class RegionalAccessPointsV2 extends React.Component {
  render() {
    const {
      regionalAccessPoin,
      property1Default21Props,
      property1Default22Props,
      property1Default23Props,
      property1Default24Props,
      property1Default25Props,
    } = this.props;

    return (
      <div className="regional-access-points-v2 border-1px-black-2">
        <div className="regional-access-poin librebaskerville-normal-black-28px">{regionalAccessPoin}</div>
        <Property1Default2 catholicCommunityServices={property1Default21Props.catholicCommunityServices} />
        <Property1Default2
          catholicCommunityServices={property1Default22Props.catholicCommunityServices}
          className={property1Default22Props.className}
        />
        <Property1Default2
          catholicCommunityServices={property1Default23Props.catholicCommunityServices}
          className={property1Default23Props.className}
        />
        <Property1Default2
          catholicCommunityServices={property1Default24Props.catholicCommunityServices}
          className={property1Default24Props.className}
        />
        <Property1Default2
          catholicCommunityServices={property1Default25Props.catholicCommunityServices}
          className={property1Default25Props.className}
        />
      </div>
    );
  }
}

export default RegionalAccessPointsV2;
