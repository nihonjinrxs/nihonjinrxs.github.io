import React from 'react';

import './SocialLink.css';

export default function SocialLink({
  href, type, username, icon, iconStyle, forPrint
}) {
  return href ? (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`social link: ${type}`}
        className={`social-link${forPrint ? '' : ' no-print'}`}
      >
        <i
          className={`${iconStyle} fa-${icon} fa-2x social-link-icon link-${type}`}
        ></i>
        <span className="print-only social-link-text">{username ? username : href}</span>
      </a>
    </>
  ) : <></>
}
