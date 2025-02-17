import React from 'react';

import SocialLink from '../SocialLink/SocialLink';

import './ProfileSocialLinks.css';

const ICONS = {
  website: "globe",
  loynodir: "chalkboard",
  loyno: "user-graduate",
  blog: "rss",
  github: "github",
  github2: "github",
  bitbucket: "bitbucket",
  stackoverflow: "stack-overflow",
  codepen: "codepen",
  linkedin: "linkedin",
  twitter: "twitter",
  bluesky: "bluesky",
  skype: "skype",
  facebook: "facebook-square",
  youtube: "youtube",
  soundcloud: "soundcloud",
  pinterest: "pinterest",
  pluralsight: "file-certificate",
  vimeo: "vimeo-square",
  behance: "behance",
  foursquare: "foursquare",
  reddit: "reddit",
  spotify: "spotify",
  tumblr: "tumblr-square",
  dribbble: "dribbble",
  angellist: "angellist",
  bountysource: "globe",
  goodreads: "books"
};
const STYLES = {
  website: "fad",
  loynodir: "fad",
  loyno: "fad",
  blog: "fal",
  github: "fab",
  github2: "fab",
  bitbucket: "fab",
  stackoverflow: "fab",
  codepen: "fab",
  linkedin: "fab",
  twitter: "fab",
  bluesky: "fa-brands",
  skype: "fab",
  facebook: "fab",
  youtube: "fab",
  soundcloud: "fab",
  pinterest: "fab",
  pluralsight: "fad",
  vimeo: "fab",
  behance: "fab",
  foursquare: "fab",
  reddit: "fab",
  spotify: "fab",
  tumblr: "fab",
  dribbble: "fab",
  angellist: "fab",
  bountysource: "fad",
  goodreads: "fad"
};

export default function ProfileSocialLinks ({ profiles }) {
  return (
    profiles ?
      <div className="social-links text-center">
        {profiles.map((profile) => {
          return (
            <SocialLink
              icon={ICONS[profile.network] || ICONS["website"]}
              iconStyle={STYLES[profile.network] || STYLES["website"]}
              type={profile.network}
              username={profile.username}
              forPrint={profile['for-print']}
              href={profile.url}
              key={profile.network}
            />
          );
        })}
      </div> :
      <></>
  )
}
