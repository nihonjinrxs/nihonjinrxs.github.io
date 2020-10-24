import React from 'react';

import './ProfileLanguages.css'

export default function ProfileLanguages ({ languages }) {
  return languages ? (
    <div className="detail">
      <span className="icon" title="Languages I speak">
        <i className="fad fa-lg fa-language"></i>
      </span>

      <span className="info">
        {languages.map(languageDisplay).join(', ')}
      </span>
    </div>
  ) : <></>
}

export function languageDisplay(language) {
  return `${language.language} [${language.fluency}]`
}
