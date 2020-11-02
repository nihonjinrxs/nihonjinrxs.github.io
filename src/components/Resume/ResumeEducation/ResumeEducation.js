import React from 'react';

import {
  Dates, SidebarDuration, displayDate
} from '../../../lib/date_utils';
import ResumeSection from '../ResumeSection/ResumeSection';

export default function ResumeEducation({
  education, title, subtitle, icon
}) {
  return (
    <div className="detail" id="education">
      <ResumeSection
        title={title}
        subtitle={subtitle}
        icon={icon}
        defaultIcon="mortar-board"
      >
        <EducationExperiences education={education} />
      </ResumeSection>
    </div>
  )
}

export function EducationExperiences ({ education }) {
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
              <p className="visible-xs visible-sm text-muted hide-when-sidebar for-print">
                <small>
                  <Dates startDate={startDate} endDate={endDate} />
                </small>
              </p>
              <i>{gpa}</i>
              <div className="space-top labels">
                <Courses courses={courses} />
              </div>
            </div>
            <div className="sidebar text-muted text-center hidden-xs hidden-sm no-print">
              <SidebarContent
                location={location}
                startDate={startDate}
                endDate={endDate}
                completed={completed}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export function Courses ({ courses }) {
  return courses.map((course) => {
    return (
      <span className="label label-keyword" key={course}>
        {course}
      </span>
    )
  })
}

export function InstitutionLocation ({ location }) {
  return <span className="location">{location}</span>
}

export function SidebarContent ({
  location, startDate, endDate, completed
}) {
  return (
    <>
      <p><InstitutionLocation location={location} /></p>
      <p><SidebarStartDate startDate={startDate} /></p>
      <p><SidebarEndDate endDate={endDate} completed={completed} /></p>
      <SidebarDuration startDate={startDate} endDate={endDate} />
    </>
  )
}

export function SidebarStartDate ({ startDate }) {
  return startDate ? (
    <>
      <span className="sidebar-date-label">Started:</span>
      <span className="sidebar-date">{displayDate(startDate)}</span>
    </>
  ) : <></>
}

export function SidebarEndDate ({ endDate, completed }) {
  return endDate ? (
    completed ? (
      <>
        <span className="sidebar-date-label">Completed:</span>
        <span className="sidebar-date">{displayDate(endDate)}</span>
      </>
    ) : (
      <>
        <span className="sidebar-date-label">Left:</span>
        <span className="sidebar-date">{displayDate(endDate)}</span>
      </>
    )
  ) : (
    <>
      <span className="label label-keyword">
        <strong>Currently Pursuing</strong>
      </span>
    </>
  )
}

export function EndDate ({ endDate }) {
  return endDate ? (
    <>
      <span className="sidebar-date">{displayDate(endDate)}</span>
    </>
  ) : (
    <span className="label label-success">
      Present
    </span>
  )
}
