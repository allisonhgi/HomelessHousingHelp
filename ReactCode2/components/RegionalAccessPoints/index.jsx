import React from "react";
import Property1Default6 from "../Property1Default6";
import "./RegionalAccessPoints.css";

class RegionalAccessPoints extends React.Component {
  render() {
    const {
      regionalAccessPoin,
      property1Default61Props,
      property1Default62Props,
      property1Default63Props,
      property1Default64Props,
      property1Default65Props,
    } = this.props;

    return (
      <div className="regional-access-points border-1px-black-2">
        <div className="regional-access-poin-2 librebaskerville-normal-black-28px">{regionalAccessPoin}</div>
        <Property1Default6 catholicCommunityServices={property1Default61Props.catholicCommunityServices} />
        <Property1Default6
          catholicCommunityServices={property1Default62Props.catholicCommunityServices}
          className={property1Default62Props.className}
        />
        <Property1Default6
          catholicCommunityServices={property1Default63Props.catholicCommunityServices}
          className={property1Default63Props.className}
        />
        <Property1Default6
          catholicCommunityServices={property1Default64Props.catholicCommunityServices}
          className={property1Default64Props.className}
        />
        <Property1Default6
          catholicCommunityServices={property1Default65Props.catholicCommunityServices}
          className={property1Default65Props.className}
        />
      </div>
    );
  }
}

export default RegionalAccessPoints;
