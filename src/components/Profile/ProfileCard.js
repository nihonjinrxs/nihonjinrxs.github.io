import React from 'react';

import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileContactInfo from './ProfileContactInfo/ProfileContactInfo'
import ProfileSocialLinks from './ProfileSocialLinks/ProfileSocialLinks'
import './ProfileCard.css'

export default function ProfileCard({
  name, label, image, location, phone, email, languages, social
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
          <div class="spacer"></div>
          <ProfileSocialLinks profiles={social}/>
        </div>
      </div>
    </section>
  )
}
