import React from 'react';

import ProfileLocation from '../ProfileLocation/ProfileLocation'
import ProfileDetail from '../ProfileDetail/ProfileDetail'
import ProfileLanguages from '../ProfileLanguages/ProfileLanguages'
import './ProfileContactInfo.css'

export default function ProfileContactInfo ({ location, phone, email, languages }) {
  return (
    <div className="contact-details clearfix">
      <ProfileLocation location={location}/>    
      <ProfileDetail value={phone} type="phone" icon="phone"/>
      <ProfileDetail value={email} type="email" icon="envelope" />
      <ProfileLanguages languages={languages} />
    </div>
  )  
}
