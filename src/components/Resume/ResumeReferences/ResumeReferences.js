import React from 'react';

import ResumeSection from '../ResumeSection/ResumeSection';
import { displayDate } from '../../../lib/date_utils';

import './ResumeReferences.css';

function ResumeReferences ({
  references, title, subtitle, icon
}) {
  return (
    <div className="detail" id="publications">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="book"
      >
        <ul className="list-unstyled">
          {references.map((ref) => ReferenceCard(ref))}
        </ul>
      </ResumeSection>
    </div>
  );
}

function ReferenceCard ({
  name, reference, profile, date, relationship
}) {
  return (
    <li className="card card-nested">
      <p>
        <a href={profile} target="_blank" rel="noopener noreferrer"><strong>{name}</strong></a>,&nbsp;
        {displayDate(date)} <span className="reference-relationship">({relationship})</span>
      </p>
      <blockquote className="quote">
        <i className="fad fa-lg fa-quote-left"></i>
        <p className="clear-margin">{reference}</p>
      </blockquote>
    </li>
  )
}

export default ResumeReferences;
