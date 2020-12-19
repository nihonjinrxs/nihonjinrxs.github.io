import React, { useState } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

import './ProfileResumeFormatLinks.css'

export default function ProfileResumeFormatLinks ({ formats }) {
  const [includeRefs, setIncludeRefs] = useState(false);
  return (
    <div className="profile-resume-format-links">
      <div className="resume-format-links-header">
        <h3>Download</h3>
        <label>
          Include references&nbsp;&nbsp;
          <Toggle
            defaultChecked={includeRefs}
            onChange={(ev) => setIncludeRefs(ev.target.checked)}
            className="resume-format-links-refs-switch"
          ></Toggle>
        </label>
      </div>
      <ul className="resume-format-links">
        {formats
          .filter(({ withReferenceContacts }) => (withReferenceContacts === includeRefs))
          .map(({ name, format, url }) => (
            <ResumeFormatLink name={name} format={format} url={url} key={name + format}></ResumeFormatLink>
          ))
        }
      </ul>
    </div>
  )
}

function ResumeFormatLink ({ name, format, url }) {
  return (
    <li className={'resume-format-link'}>
    <a href={url} alt={name}>
      <i className={`fad fa-${getIconForFormat(format)} icon`}></i>
      <span>{name}</span>
    </a>
    </li>
  )
}

function getIconForFormat (format) {
  switch (format) {
    case 'application/pdf':
      return 'file-pdf';
    default:
      return 'file-download'
  }
}
