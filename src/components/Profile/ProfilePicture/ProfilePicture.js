import React from 'react';

import './ProfilePicture.css'

export default function ProfilePicture ({ name, imageUrl }) {
  return (
    <div className="profile-pic">
      <img
        className="media-object img-circle center-block"
        alt={name}
        src={imageUrl}
        itemProp="image"/>
    </div>
  )
}
