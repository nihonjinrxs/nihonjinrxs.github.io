import React from 'react';

import {
  Dates, Duration, SidebarDuration
} from '../../../lib/date_utils'

export default function ResumeVolunteer({
  volunteer, title, subtitle, icon
}) {
  const volunteerIcon = icon || 'hands-helping';
  return (
    <div className="detail" id="volunteer-experience">
      <div className="icon">
        <i className={`fa fa-lg fa-${volunteerIcon}`}></i>
        <span className="mobile-title">{title}</span>
      </div>
      <div className="info">
        <h4 className="title text-uppercase">
          {title} <span className="grey">{subtitle}</span>
        </h4>
        {rendervolunteer(volunteer)}
      </div>
    </div>
  )
}

export function rendervolunteer(volunteer) {
  const positions = volunteer.map(
    volunteerPosition => {
      const positionId = volunteerPosition.organization + volunteerPosition.startDate
      return (
        <li className="card card-nested clearfix" key={positionId}>
          {VolunteerPosition(volunteerPosition)}
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
  const orgDisplay = Organization(organization, url)
  const datesDisplay = Dates(startDate, endDate)
  const durationDisplay = Duration(startDate, endDate)
  const highlightsDisplay = Highlights(highlights)
  const sidebarContent = SidebarContent(startDate, endDate)
  return (
    <>
      <div className="content has-sidebar">
        <p className="clear-margin-sm">
          <strong>{position}</strong>,&nbsp;{orgDisplay}
        </p>
        <p className="text-muted visible-xs visible-sm">
          <small>
            <span className="space-right">
              {datesDisplay}
            </span>

            {durationDisplay}
          </small>
        </p>
        <p>{summary}</p>
        {highlightsDisplay}
      </div>

      <div className="sidebar text-muted text-center hidden-xs hidden-sm">
        {sidebarContent}
      </div>
    </>
  )
}

export function Organization(organization, url) {
  return url ? (
    <><a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >{organization}</a></>
  ) : <>{organization}</>
}

export function Highlights(highlights) {
  return highlights ? (
    <>
      <ul>
        {highlights.map((highlight, idx) => {
          const key = `highlight-${idx}`;
          return <li key={key}>{highlight}</li>;
        })}
      </ul>
    </>
  ) : <></>
}

export function SidebarContent(startDate, endDate) {
  return (
    <>
      <p>{SidebarStartDate(startDate)}</p>
      <p>{SidebarEndDate(endDate)}</p>
      {SidebarDuration(startDate, endDate)}
    </>
  )
}

export function SidebarStartDate(startDate) {
  return startDate ? (
    <>
      <strong>Joined:</strong> {startDate}
    </>
  ) : <></>
}

export function SidebarEndDate(endDate) {
  return endDate ? (
    <>
      <strong>Left:</strong> {endDate}
    </>
  ) : (
    <>
      <span className="label label-success">
        Currently volunteering
      </span>
    </>
  )
}
