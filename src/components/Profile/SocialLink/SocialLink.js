import React from 'react';

import './SocialLink.css';

export default function SocialLink ({ href, type, icon, iconStyle }) {
  return href ? (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`social link: ${type}`}
        className="social-link"
      >
        <i
          className={`${iconStyle} fa-${icon} fa-2x social-link-icon link-${type}`}
        ></i>  
      </a>
    </>
  ) : <></>
}
