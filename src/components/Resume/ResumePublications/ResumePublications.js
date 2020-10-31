import React from 'react';

import './ResumePublications.css';

import { displayDate } from '../../../lib/date_utils';
import ResumeSection from '../ResumeSection/ResumeSection';

function ResumePublication ({
  publications, title, subtitle, icon
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
          {publications.map((pub) => PublicationCard(pub))}
        </ul>
      </ResumeSection>
    </div>
  );
}

function PublicationCard ({
  name, publicationType, publisher, releaseDate, website, summary, links
}) {
  console.log(releaseDate);
  return (
    <li className="card card-nested">
      <div className="content has-sidebar">
        <p className="clear-margin-sm">
          <strong>{
            website ? (
              <a href={website} target="_blank" rel="noopener noreferrer">{name}</a>
            ) : name
          }</strong>,&nbsp;{publisher}
        </p>
        <p className="clear-margin-sm">
          {PublicationLinks(links)}
        </p>
        <p className="visible-xs visible-sm text-muted">
          <small>{getDeliveryName(publicationType)}: {displayDate(releaseDate)}</small>
        </p>
        <p className="clear-margin">
          {summary}
        </p>
      </div>
      <div className="sidebar text-muted text-center hidden-sm hidden-xs">
        <p>{getDeliveryName(publicationType)}: {displayDate(releaseDate)}</p>
      </div>
    </li>
  );
}

function PublicationLinks (links) {
  return (
    links ?
      Object.entries(links)
        .map(([linkType, linkUrl]) => {
          return (
            <a
              className="pub-link"
              href={linkUrl} target="_blank" rel="noopener noreferrer"
            >
              <i className={
                `fa${getIconStyle(linkType)} fa-lg fa-${getPublicationIcon(linkType)} pub-link-icon`
              }></i>
              View {linkType} online
            </a>
          );
        })
        .reduce((acc, elt) => {
          console.log(elt, acc);
          return acc.concat([elt, (<span class="link-separator">•</span>)]);
        }, [])
        .slice(0, -1) :
      ''
  )
}

function getPublicationIcon (linkType) {
  return {
    paper: 'file-alt',
    slides: 'desktop',
    materials: 'file-code',
    library: 'file-code',
    video: 'video'
  }[linkType];
}

function getIconStyle (linkType) {
  return {
    paper: 's',
    slides: 'd',
    materials: 's',
    library: 's',
    video: 's'
  }[linkType];
}

function getDeliveryName (publicationType) {
  return {
    paper: 'Published',
    book: 'Published',
    chapter: 'Published',
    talk: 'Given'
  }[publicationType]
}

export default ResumePublication;
