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
  return (
    <li className="card card-nested no-pagebreak" key={name+releaseDate}>
      <div className="content has-sidebar">
        <p className="clear-margin-sm">
          <strong>{
            website ? (
              <a href={website} target="_blank" rel="noopener noreferrer">{name}</a>
            ) : name
          }</strong>,&nbsp;{publisher}
        </p>
        <div className="text-muted for-print hide-when-sidebar">
          <p>
            <small>
              <i
                className={`fas fa-xl fa-${getPublicationIcon(publicationType)} pub-icon`}
              ></i>
              <strong>{publicationType[0].toUpperCase() + publicationType.substring(1).replace('-', ' ')}</strong>
              &nbsp;&bull;&nbsp;
              <span>{getDeliveryName(publicationType)}:</span>
              <span>{displayDate(releaseDate)}</span>
            </small>
          </p>
        </div>
        <p className="clear-margin-sm">
          {PublicationLinks(links)}
        </p>
        <p className="visible-xs visible-sm text-muted hide-when-sidebar">
          <small>{getDeliveryName(publicationType)}: {displayDate(releaseDate)}</small>
        </p>
        <p className="clear-margin">
          {summary}
        </p>
      </div>
      <div className="sidebar text-muted text-center hidden-sm hidden-xs no-print">
        <p>
          <i
            className={`fas fa-xl fa-${getPublicationIcon(publicationType)} pub-icon`}
          ></i>
          
          <strong>{publicationType[0].toUpperCase() + publicationType.substring(1).replace('-', ' ')}</strong>
        </p>
        <p>
          <span className="sidebar-date-label">{getDeliveryName(publicationType)}:</span>
          <span className="sidebar-date">{displayDate(releaseDate)}</span>
        </p>
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
              key={linkType+linkUrl}
            >
              <i className={
                `fa${getIconStyle(linkType)} fa-lg fa-${getLinkIcon(linkType)} pub-link-icon`
              }></i>
              View {linkType} online
            </a>
          );
        })
        .reduce((acc, elt, idx) => {
          return acc.concat([elt, (<span className="link-separator" key={`sep-${idx}`}>•</span>)]);
        }, [])
        .slice(0, -1) :
      ''
  )
}

function getLinkIcon (linkType) {
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

function getPublicationIcon (publicationType) {
  return {
    paper: 'file-alt',
    book: 'book-alt',
    chapter: 'book-alt',
    talk: 'podium',
    'lightning-talk': 'bolt' 
  }[publicationType]
}

function getDeliveryName (publicationType) {
  return {
    paper: 'Published',
    book: 'Published',
    chapter: 'Published',
    talk: 'Given',
    'lightning-talk': 'Given' 
  }[publicationType]
}

export default ResumePublication;
