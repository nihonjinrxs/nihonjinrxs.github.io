import React from 'react';

import './ProfileLocation.css'

export default function ProfileLocation ({ location }) {
  return location ? (
    <div className="detail">
      <span className="icon">
        <i className="fad fa-lg fa-location-arrow"></i>
      </span>

      <span className="info">
        { location.city }, { location.region }, { location.countryCode }
      </span>
    </div>
  ) : <></>
}
