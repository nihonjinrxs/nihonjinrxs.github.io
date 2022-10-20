import React from 'react';
import { marked } from 'marked';
import { sanitize } from 'dompurify';

import ProfilePicture from '../ProfilePicture/ProfilePicture'

export default function ProfileHeader ({ name, label, imageUrl }) {
  return (
    <span className="profile-pic-container">
      <ProfilePicture name={name} imageUrl={imageUrl}/>

      <div className="name-and-profession">
        <h3
          className="text-center text-bolder name"
          itemProp="name"
        >{name}</h3>
        <h5
          className="text-muted text-center"
          itemProp="jobTitle"
          dangerouslySetInnerHTML={{ __html: sanitize(marked(label)) }}
        ></h5>
      </div>
    </span>
  )  
}
