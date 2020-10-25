import React from 'react';

import {
  Dates, Duration, SidebarDuration
} from '../../../lib/date_utils';

export default function ResumeEducation({
  education, title, subtitle, icon
}) {
  const edIcon = icon || 'mortar-board';
  return (
    <div className="detail" id="education">
      <div className="icon">
        <i className={`fa fa-lg fa-${edIcon}`}></i>
        <span className="mobile-title">{title}</span>
      </div>
      <div className="info">
        <h4 className="title text-uppercase">
          {title} <span className="grey">{subtitle}</span>
        </h4>

        <div className="content">
          {EducationExperiences(education)}
        </div>
      </div>
    </div>
  )
}

export function EducationExperiences(education) {
  return (
    <ul className="list-unstyled">
      {education.map(({
        studyType, area, institution, location,
        startDate, endDate, completed, gpa, courses
      }) => {
        return (
          <li className="card card-nested"
            key={studyType+area+institution+startDate}>
            <div className="content has-sidebar">
              <p className="clear-margin-sm study-type">
                <strong>{studyType}</strong>
              </p>
              <p className="clear-margin-sm study-area">
                <strong>{area}</strong>
              </p>
              <p className="clear-margin-sm institution">
                {institution}
              </p>
              <p className="visible-xs visible-sm text-muted hide-when-sidebar">
                <small>
                <span>
                  {startDate} &mdash; {EndDate(endDate)}
                </span>
                </small>
              </p>
              <i>{gpa}</i>
              <div className="space-top labels">
                {Courses(courses)}
              </div>
            </div>
            <div className="sidebar text-muted text-center hidden-xs hidden-sm">
              {SidebarContent(location, startDate, endDate, completed)}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export function Courses(courses) {
  return courses.map((course, index) => {
    return (
      <span className="label label-keyword" key={course}>
        {course}
      </span>
    )
  })
}

export function InstitutionLocation(location) {
  return <span className="location">{location}</span>
}

export function SidebarContent(location, startDate, endDate, completed) {
  return (
    <>
      <p>{InstitutionLocation(location)}</p>
      <p>{SidebarStartDate(startDate)}</p>
      <p>{SidebarEndDate(endDate, completed)}</p>
      {SidebarDuration(startDate, endDate)}
    </>
  )
}

export function SidebarStartDate(startDate) {
  return startDate ? (
    <>
      <strong>Started:</strong> {startDate}
    </>
  ) : <></>
}

export function SidebarEndDate(endDate, completed) {
  return endDate ? (
    completed ? (
      <>
        <strong>Completed:</strong> {endDate}
      </>
    ) : (
      <>
        <strong>Left:</strong> {endDate}
      </>
    )
  ) : (
    <>
      <span className="label label-success">
        Currently Pursuing
      </span>
    </>
  )
}

export function EndDate(endDate) {
  return endDate ? (
    <>
      {endDate}
    </>
  ) : (
    <span className="label label-success">
      Present
    </span>
  )
}
