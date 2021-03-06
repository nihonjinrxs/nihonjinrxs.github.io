import React from 'react';

import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileContactInfo from './ProfileContactInfo/ProfileContactInfo'
import ProfileSocialLinks from './ProfileSocialLinks/ProfileSocialLinks'
import ProfileResumeFormatLinks from './ProfileResumeFormatLinks/ProfileResumeFormatLinks'
import './ProfileCard.css'

export default function ProfileCard({
  name, label, image, location, phone, email, languages, social, formats
}) {
  return (
    <section className="card-wrapper profile-card-wrapper">
      <div className="card profile-card">
        <ProfileHeader name={name} label={label} imageUrl={image}/>
        <hr />
        <div className="profile-info-container">
          <ProfileContactInfo
            location={location}
            phone={phone}
            email={email}
            languages={languages}
          />
          <div className="spacer"></div>
          <ProfileSocialLinks profiles={social}/>
          <div className="spacer"></div>
          <ProfileResumeFormatLinks formats={formats}></ProfileResumeFormatLinks>
        </div>
      </div>
    </section>
  )
}
