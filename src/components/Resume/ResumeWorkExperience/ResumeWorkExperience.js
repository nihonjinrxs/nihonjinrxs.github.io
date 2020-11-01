import React from 'react';
import marked from 'marked';

import {
  Dates, Duration, SidebarDuration
} from '../../../lib/date_utils';
import ResumeSection from '../ResumeSection/ResumeSection';

import './ResumeWorkExperience.css';

export default function ResumeWorkExperience({
  work, title, subtitle, icon
}) {
  return (
    <div className="detail" id="work-experience">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="building"
      >
        <Work work={work} />
      </ResumeSection>
    </div>
  )
}

export function Work ({ work }) {
  const positions = work.map(
    workPosition => {
      const positionId = workPosition.company + workPosition.startDate
      return (
        <li className="card card-nested clearfix" key={positionId}>
          <WorkPosition
            position={workPosition.position}
            name={workPosition.name}
            type={workPosition.type}
            location={workPosition.location}
            url={workPosition.url}
            summary={workPosition.summary}
            startDate={workPosition.startDate}
            endDate={workPosition.endDate}
            schedule={workPosition.schedule}
            highlights={workPosition.highlights}
          />
        </li>
      )
    }
  )
  return (
    <ul className="list-unstyled">
      {positions}
    </ul>
  )
}

export function WorkPosition({
  position, name, type, location, url, summary,
  startDate, endDate, schedule, highlights
}) {
  return (
    <>
      <div className="content has-sidebar">
        <p className="clear-margin-sm">
          <strong>{position}</strong>,&nbsp;<Company name={name} url={url} />
        </p>
        <p className="text-muted visible-xs visible-sm hide-when-sidebar">
          <small>
            <span className="space-right">
              <PositionLocation location={location} /> &bull;
            </span>
            
            <span className="space-right">
              <Dates startDate={startDate} endDate={endDate} /> &bull;
            </span>

            <Duration startDate={startDate} endDate={endDate} />
          </small>
        </p>
        <p dangerouslySetInnerHTML={{ __html: marked(summary, { sanitize: true }) }}></p>
        <PositionHighlights highlights={highlights} />
      </div>

      <div className="sidebar text-muted text-center hidden-xs hidden-sm">
        <SidebarContent
          type={type}
          location={location}
          startDate={startDate}
          endDate={endDate}
          schedule={schedule}
        />
      </div>
    </>
  )
}

export function Company ({ name, url }) {
  return url ? (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >{name}</a>
    </>
  ) : <>{name}</>
}

export function PositionHighlights ({ highlights }) {
  return highlights ? (
    <>
      <ul>
        {highlights.map((highlight, idx) => {
          const key = `highlight-${idx}`;
          return <li key={key} dangerouslySetInnerHTML={{
            __html: marked(highlight, { sanitize: true })
          }}></li>;
        })}
      </ul>
    </>
  ) : <></>
}

export function PositionLocation ({ location }) {
  return <strong className="work-location">{location}</strong>
}

export function SidebarContent ({ type, location, startDate, endDate, schedule }) {
  return (
    <>
      <p><PositionLocation location={location} /></p>
      <p><SidebarStartDate startDate={startDate} /></p>
      <p><SidebarEndDate endDate={endDate} /></p>
      <SidebarDuration startDate={startDate} endDate={endDate} schedule={schedule} />
      <p><PositionType type={type} /></p>
    </>
  )
}

export function PositionType ({ type }) {
  switch (type) {
    case 'primary':
      return (
        <span>Primary Employment</span>
      );
    case 'secondary':
      return (
        <span>Secondary Employment</span>
      );
    default:
      return '';
  }
}

export function SidebarStartDate ({ startDate }) {
  return startDate ? (
    <>
      <strong>Joined:</strong> {startDate}
    </>
  ) : <></>
}

export function SidebarEndDate ({ endDate }) {
  return endDate ? (
    <>
      <strong>Left:</strong> {endDate}
    </>
  ) : (
    <>
      <span className="label label-keyword">
        <strong>Currently Working</strong>
      </span>
    </>
  )
}
