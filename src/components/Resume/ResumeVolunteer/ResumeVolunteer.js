import React from 'react';
import marked from 'marked';

import {
  Dates, Duration, SidebarDuration, displayDate
} from '../../../lib/date_utils'
import ResumeSection from '../ResumeSection/ResumeSection';

export default function ResumeVolunteer({
  volunteer, title, subtitle, icon
}) {
  return (
    <div className="detail" id="volunteer">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="hands-helping"
      >
        <VolunteerPositions volunteer={volunteer} />
      </ResumeSection>
    </div>
  )
}

export function VolunteerPositions ({ volunteer }) {
  const positions = volunteer.map(
    volunteerPosition => {
      const positionId = volunteerPosition.organization + volunteerPosition.startDate
      return (
        <li className="card card-nested clearfix" key={positionId}>
          <VolunteerPosition
            position={volunteerPosition.position}
            organization={volunteerPosition.organization}
            url={volunteerPosition.url}
            summary={volunteerPosition.summary}
            startDate={volunteerPosition.startDate}
            endDate={volunteerPosition.endDate}
            highlights={volunteerPosition.highlights}
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

export function VolunteerPosition({
  position, organization, url, summary,
  startDate, endDate, highlights
}) {
  return (
    <>
      <div className="content has-sidebar">
        <p className="clear-margin-sm">
          <strong>{position}</strong>,&nbsp;<Organization organization={organization} url={url} />
        </p>
        <p className="text-muted visible-xs visible-sm hide-when-sidebar">
          <small>
            <span className="space-right">
              <Dates startDate={startDate} endDate={endDate} />
            </span>

            <Duration startDate={startDate} endDate={endDate} />
          </small>
        </p>
        <p dangerouslySetInnerHTML={{ __html: marked(summary, { sanitize: true }) }}></p>
        <PositionHighlights highlights={highlights} />
      </div>

      <div className="sidebar text-muted text-center hidden-xs hidden-sm">
        <SidebarContent startDate={startDate} endDate={endDate} />
      </div>
    </>
  )
}

export function Organization ({ organization, url }) {
  return url ? (
    <><a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >{organization}</a></>
  ) : <>{organization}</>
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

export function SidebarContent ({ startDate, endDate }) {
  return (
    <>
      <p><SidebarStartDate startDate={startDate} /></p>
      <p><SidebarEndDate endDate={endDate} /></p>
      <SidebarDuration startDate={startDate} endDate={endDate} />
    </>
  )
}

export function SidebarStartDate ({ startDate }) {
  return startDate ? (
    <>
      <span className="sidebar-date-label">Joined:</span>
      <span className="sidebar-date">{displayDate(startDate)}</span>
    </>
  ) : <></>
}

export function SidebarEndDate ({ endDate }) {
  return endDate ? (
    <>
      <span className="sidebar-date-label">Left:</span>
      <span className="sidebar-date">{displayDate(endDate)}</span>
    </>
  ) : (
    <>
      <span className="label label-keyword">
        <strong>Currently Volunteering</strong>
      </span>
    </>
  )
}
