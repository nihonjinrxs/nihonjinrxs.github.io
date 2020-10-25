import React from 'react';

import {
  Dates, Duration, SidebarDuration
} from '../../../lib/date_utils';

import './ResumeWorkExperience.css';

export default function ResumeWorkExperience({
  work, title, subtitle, icon
}) {
  const workIcon = icon || 'building';
  return (
    <div className="detail" id="work-experience">
      <div className="icon">
        <i className={`fa fa-lg fa-${workIcon}`}></i>
        <span className="mobile-title">{title}</span>
      </div>
      <div className="info">
        <h4 className="title text-uppercase">
          {title} <span className="grey">{subtitle}</span>
        </h4>
        {Work(work)}
      </div>
    </div>
  )
}

export function Work(work) {
  const positions = work.map(
    workPosition => {
      const positionId = workPosition.company + workPosition.startDate
      return (
        <li className="card card-nested clearfix" key={positionId}>
          {WorkPosition(workPosition)}
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
  position, name, location, url, summary,
  startDate, endDate, highlights
}) {
  const companyDisplay = Company(name, url)
  const positionLocationDisplay = PositionLocation(location)
  const datesDisplay = Dates(startDate, endDate)
  const durationDisplay = Duration(startDate, endDate)
  const highlightsDisplay = Highlights(highlights)
  const sidebarContent = SidebarContent(location, startDate, endDate)
  return (
    <>
      <div className="content has-sidebar">
        <p className="clear-margin-sm">
          <strong>{position}</strong>,&nbsp;{companyDisplay}
        </p>
        <p className="text-muted visible-xs visible-sm hide-when-sidebar">
          <small>
            <span className="space-right">
              {positionLocationDisplay} &bull;
            </span>
            
            <span className="space-right">
              {datesDisplay} &bull;
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

export function Company(name, url) {
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

export function PositionLocation(location) {
  return <span className="work-location">{location}</span>
}

export function SidebarContent(location, startDate, endDate) {
  return (
    <>
      <p>{PositionLocation(location)}</p>
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
        Currently Working
      </span>
    </>
  )
}
