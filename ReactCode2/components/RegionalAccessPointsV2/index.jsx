import React from "react";
import Property1Default82 from "../Property1Default82";
import "./RegionalAccessPointsV2.css";

class RegionalAccessPointsV2 extends React.Component {
  render() {
    const {
      regionalAccessPoin,
      property1Default81Props,
      property1Default82Props,
      property1Default83Props,
      property1Default84Props,
      property1Default85Props,
    } = this.props;

    return (
      <div className="regional-access-points-v2 border-1px-black-2">
        <div className="regional-access-poin librebaskerville-normal-black-28px">{regionalAccessPoin}</div>
        <Property1Default82 catholicCommunityServices={property1Default81Props.catholicCommunityServices} />
        <Property1Default82
          catholicCommunityServices={property1Default82Props.catholicCommunityServices}
          className={property1Default82Props.className}
        />
        <Property1Default82
          catholicCommunityServices={property1Default83Props.catholicCommunityServices}
          className={property1Default83Props.className}
        />
        <Property1Default82
          catholicCommunityServices={property1Default84Props.catholicCommunityServices}
          className={property1Default84Props.className}
        />
        <Property1Default82
          catholicCommunityServices={property1Default85Props.catholicCommunityServices}
          className={property1Default85Props.className}
        />
      </div>
    );
  }
}

export default RegionalAccessPointsV2;
